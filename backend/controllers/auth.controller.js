//backend/controllers/auth.controller.js employeeCode.controller.js
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';

import { User, USER_ROLES } from '../models/user.module.js';
import { EmployeeCode } from '../models/employeeCode.model.js';
import { generateVerificationToken } from '../utils/generateVerificationToken.js';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { testBrevoConnection, sendPasswordResetEmail, sendResetSuccessEmail, sendVerificationEmail, sendWelcomeEmail } from '../mailing/emails.js';
import logger from '../utils/logger.js';


const ADMIN_REGISTRATION_CODE = process.env.ADMIN_REGISTRATION_CODE || "ADMIN2025_SECRET";

export const signup = async (req, res) => {
    const { 
        email, 
        firstName, 
        password, 
        role = USER_ROLES.TRAINEE,
        employeeCode, 
        adminCode     
    } = req.body;
    
    try {
        logger.info('User signup attempt', { email, role });

        // Валідація обов'язкових полів
        if(!email || !firstName || !password) {
            throw new Error("Введіть дані в усі обов'язкові поля!");
        }

        // Перевірка на існуючого користувача
        const userAlreadyExists = await User.findOne({ email });
        if(userAlreadyExists) {
            return res.status(400).json({
                success: false, 
                message: "Користувач вже існує!"
            });
        }

        // Логіка для різних ролей
        if (role === USER_ROLES.ADMIN) {
            if (!adminCode || adminCode !== ADMIN_REGISTRATION_CODE) {
                return res.status(400).json({
                    success: false,
                    message: "Недійсний менеджерський код"
                });
            }
        } 
        else if (role === USER_ROLES.WAITER) {
            if (!employeeCode) {
                return res.status(400).json({
                    success: false,
                    message: "Код офіціанта обов'язковий"
                });
            }
        }
        else if (role === USER_ROLES.HELPER) {
            if (!employeeCode) {
                return res.status(400).json({
                    success: false,
                    message: "Код помічника обов'язковий"
                });
            }
        }
        else if (role === USER_ROLES.TRAINEE) {
    // trainee-specific logic goes here (if any)
            // Стажер не потребує коду працівника
        }

        // Перевірка коду працівника
        if (role !== USER_ROLES.TRAINEE && role !== USER_ROLES.ADMIN) {
            const validCode = await EmployeeCode.findOne({ 
                code: employeeCode,
                isUsed: false 
            });

            if (!validCode) {
                return res.status(400).json({
                    success: false,
                    message: "Недійсний або вже використаний код працівника"
                });
            }
        }

        // Хешування пароля
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = generateVerificationToken();
        
        const user = new User({
            email,
            password: hashedPassword,
            firstName,
            role, 
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 1000 * 60 * 60 * 1 // 1 година
        });

        await user.save();
        
        logger.info('User created successfully', { userId: user._id, email, role });

        // Позначити код як використаний (тільки для ролей, які не є ADMIN або TRAINEE)
        if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.TRAINEE && employeeCode) {
            await EmployeeCode.findOneAndUpdate(
                { code: employeeCode },
                { 
                    isUsed: true,
                    usedBy: user._id,
                    usedAt: new Date()
                }
            );
        }

        // Генерація JWT та кукі
        generateTokenAndSetCookie(res, user._id);
        // Відправка email для верифікації
        await sendVerificationEmail(user.email, verificationToken);

        // Успішна відповідь
        res.status(201).json({
            success: true,
            message: "Користувач успішно створений",
            user: {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                role: user.role,
                isVerified: user.isVerified,
                createdAt: user.createdAt
            },
        });

    } catch (error) {
        logger.error('Signup error', { error: error.message, email });
        return res.status(400).json({
            success: false, 
            message: error.message || "Сталася помилка при реєстрації"
        });
    }
};

// Підтвердження ел.пошти
export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        logger.info('Email verification attempt', { code: code?.substring(0, 10) });
        
        await testBrevoConnection();
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now()}
        })

        if(!user) {
            logger.warn('Invalid verification code', { code: code?.substring(0, 10) });
            return res.status(400).json({success: false, message: "Неправильний або просрочений код перевірки"})
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.firstName);
        
        logger.info('Email verified successfully', { userId: user._id, email: user.email });
        
        res.status(200).json({
            success: true,
            message: "Електронна пошта успішно підтверджена",
            user: {
                ...user._doc,
                password: undefined,
            },
        });
    } catch (error) {
        logger.error('Email verification error', { error: error.message });
        res.status(500).json({success:false, message: "Помилка системи" });
    }
};

// Вхід в акаунт
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        logger.info('Login attempt', { email });
        
        const user = await User.findOne({ email });
        if(!user) {
            logger.warn('Login failed - user not found', { email });
            return res.status(400).json({ success: false, message: "Неправильні дані для входу"});
        }
        
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if(!isPasswordValid) {
            logger.warn('Login failed - invalid password', { email });
            return res.status(400).json({ success: false, message: "Пароль для входу не співпадає"});
        }

        generateTokenAndSetCookie(res, user._id);
        user.entryDate = new Date();
        await user.save();
        
        logger.info('User logged in successfully', { userId: user._id, email });

        res.status(200).json({
            success: true,
            message: "Ви успішно війшли в свій акаунт",
            user: {
                ...user._doc,
                password: undefined,
            },
        });

    } catch (error) {
        logger.error('Login error', { error: error.message, email });
        res.status(500).json({ success: false, message: error.message || 'Помилка серверу' });
    }
};

// Вихід з акаунта
export const logout = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Ви успшіно вийшли з свого акаунта"});
};

// Забув пароль
export const forgotPassword = async (req, res) => {
    const { email } = req.body
    try {
        logger.info('Password reset request', { email });
        
        const user = await User.findOne({ email });

        if(!user) {
            logger.warn('Password reset - user not found', { email });
            return res.status(400).json({ success: false, message: "Користувача не найдено"});
        }

        const resetToken = crypto.randomBytes(52).toString("hex");
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

        user.resetPasswordToken = resetToken;
        user.resetPasswordTokenExpiresAt = resetTokenExpiresAt;

        await user.save();

        const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
        await sendPasswordResetEmail(user.email, `${clientUrl}/reset-password/${resetToken}`);
        
        logger.info('Password reset email sent', { userId: user._id, email });
        
        res.status(200).json({ success: true, message: "Лист для скидання паролю успішно надісланий"});

    } catch (error) {
        logger.error('Password reset error', { error: error.message, email });
        res.status(400).json({ success: false, message: error.message });
    }
};

export const resetPassword = async (req, res) => {
	try {
		const { token } = req.params;
		const { password } = req.body;

		logger.info('Password reset attempt', { token: token?.substring(0, 10) });

		const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordTokenExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			logger.warn('Password reset - invalid token', { token: token?.substring(0, 10) });
			return res.status(400).json({ success: false, message: "Невірний або старий код відновлення" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);

		user.password = hashedPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordTokenExpiresAt = undefined;
		await user.save();

		await sendResetSuccessEmail(user.email);

		logger.info('Password reset successfully', { userId: user._id });

		res.status(200).json({ success: true, message: "Пароль відновлено успішно" });
	} catch (error) {
		logger.error('Password reset error', { error: error.message });
		res.status(400).json({ success: false, message: error.message });
	}
};

// Перевірка підтвердженої сесії
export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			logger.warn('User not found in checkAuth', { userId: req.userId });
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		logger.error('CheckAuth error', { error: error.message, userId: req.userId });
		res.status(400).json({ success: false, message: error.message });
	}
};
