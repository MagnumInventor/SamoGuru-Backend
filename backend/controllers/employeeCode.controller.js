// backend/controllers/employeeCode.controller.js
import { EmployeeCode } from '../models/employeeCode.model.js';
import { User } from '../models/user.module.js';

// Константа для адміністраторського коду
const ADMIN_REGISTRATION_CODE = process.env.ADMIN_REGISTRATION_CODE || "ADMIN2025_SECRET";

// Перевірка адміністраторського коду при реєстрації
export const verifyAdminCode = async (req, res) => {
    const { adminCode } = req.body;
    
    try {
        if (adminCode !== ADMIN_REGISTRATION_CODE) {
            return res.status(400).json({
                success: false,
                message: "Недійсний адміністраторський код"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Адміністраторський код підтверджено"
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Додавання коду працівника (тільки адміни)
export const addEmployeeCode = async (req, res) => {
    const { code, description = '' } = req.body;
    
    try {
        // Видалено перевірку ролі адміна

        // Перевірка чи код вже існує
        const existingCode = await EmployeeCode.findOne({ code });
        if (existingCode) {
            return res.status(400).json({
                success: false,
                message: "Код вже існує"
            });
        }

        const employeeCode = new EmployeeCode({
            code,
            description,
            //createdBy: req.userId || null
        });

        await employeeCode.save();

        res.status(201).json({
            success: true,
            message: "Код працівника додано",
            code: {
                _id: employeeCode._id,
                code: employeeCode.code,
                description: employeeCode.description,
                isUsed: employeeCode.isUsed,
                createdAt: employeeCode.createdAt
            }
        });

    } catch (error) {
        console.error("Помилка додавання коду:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Видалення коду працівника (тільки адміни)
export const deleteEmployeeCode = async (req, res) => {
    const { codeId } = req.params;
    
    try {
        // Видалено перевірку ролі адміна

        const employeeCode = await EmployeeCode.findById(codeId);
        if (!employeeCode) {
            return res.status(404).json({
                success: false,
                message: "Код не знайдено"
            });
        }

        // Не дозволяти видаляти використані коди
        if (employeeCode.isUsed) {
            return res.status(400).json({
                success: false,
                message: "Неможливо видалити використаний код"
            });
        }

        await EmployeeCode.findByIdAndDelete(codeId);

        res.status(200).json({
            success: true,
            message: "Код успішно видалено"
        });

    } catch (error) {
        console.error("Помилка видалення коду:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Отримання всіх кодів (тільки адміни)
export const getAllEmployeeCodes = async (req, res) => {
    try {
        // Видалено перевірку ролі адміна
        const codes = await EmployeeCode.find()
            .populate('usedBy', 'firstName lastName email')
            .populate('firstName lastName')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            codes
        });

    } catch (error) {
        console.error("Помилка отримання кодів:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Перевірка коду працівника при реєстрації
export const verifyEmployeeCode = async (req, res) => {
    const { employeeCode } = req.body;
    
    try {
        const code = await EmployeeCode.findOne({ 
            code: employeeCode,
            isUsed: false 
        });

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Недійсний або вже використаний код"
            });
        }

        res.status(200).json({
            success: true,
            message: "Код дійсний",
            codeId: code._id
        });

    } catch (error) {
        console.error("Помилка перевірки коду:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};