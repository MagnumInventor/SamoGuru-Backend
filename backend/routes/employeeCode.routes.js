// backend/routes/employeeCode.routes.js
import express from 'express';
import { 
    addEmployeeCode, 
    deleteEmployeeCode, 
    getAllEmployeeCodes, 
    verifyEmployeeCode,
    verifyAdminCode 
} from '../controllers/employeeCode.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Перевірка адміністраторського коду (публічний маршрут)
router.post('/verify-admin-code', verifyAdminCode);

// Перевірка коду працівника (публічний маршрут)
router.post('/verify-employee-code', verifyEmployeeCode);

// Захищені маршрути (потрібна авторизація)
router.use(verifyToken); // Застосовується до всіх маршрутів нижче

// Додавання коду (тільки адміни)
router.post('/add', addEmployeeCode);

// Видалення коду (тільки адміни)
router.delete('/:codeId', deleteEmployeeCode);

// Отримання всіх кодів (тільки адміни)
router.get('/all', getAllEmployeeCodes);

export default router;