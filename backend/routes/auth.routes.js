import express from 'express';
import { 
  signup, 
  login, 
  logout, 
  verifyEmail, 
  forgotPassword, 
  resetPassword, 
  checkAuth 
} from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { validate, validationSchemas } from '../middleware/validate.middleware.js';
import { authLimiter } from '../middleware/rateLimiter.middleware.js';

const router = express.Router();

/**
 * @route POST /api/auth/signup
 * @desc Register a new user
 * @body {email, firstName, password, role, employeeCode?, adminCode?}
 */
router.post('/signup', authLimiter, validate(validationSchemas.signup), signup);

/**
 * @route POST /api/auth/login
 * @desc Login user
 * @body {email, password}
 */
router.post('/login', authLimiter, validate(validationSchemas.login), login);

/**
 * @route POST /api/auth/verify-email
 * @desc Verify user email
 * @body {code}
 */
router.post('/verify-email', validate(validationSchemas.verifyEmail), verifyEmail);

/**
 * @route POST /api/auth/logout
 * @desc Logout user
 */
router.post('/logout', verifyToken, logout);

/**
 * @route POST /api/auth/forgot-password
 * @desc Request password reset
 * @body {email}
 */
router.post('/forgot-password', validate(validationSchemas.forgotPassword), forgotPassword);

/**
 * @route POST /api/auth/reset-password/:token
 * @desc Reset password
 * @param {token}
 * @body {password}
 */
router.post('/reset-password/:token', validate(validationSchemas.resetPassword), resetPassword);

/**
 * @route GET /api/auth/check
 * @desc Check if user is authenticated
 */
router.get('/check', verifyToken, checkAuth);

export default router;
