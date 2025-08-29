// backend/routes/employeeCode.routes.js
import express from 'express';
import { 
    addEmployeeCode, 
    deleteEmployeeCode, 
    getAllEmployeeCodes, 
    verifyEmployeeCode,
    verifyAdminCode 
} from '../controllers/employeeCode.controller.js';

const router = express.Router();

// Перевірка адміністраторського коду (публічний маршрут)
router.post('/verify-admin-code', verifyAdminCode);
// Перевірка коду працівника (публічний маршрут)
router.post('/verify-employee-code', verifyEmployeeCode);

// Видалити захищені маршрути (потрібна авторизація)
// router.use(verifyToken); // Застосовується до всіх маршрутів нижче

router.post('/add', addEmployeeCode);
router.delete('/:codeId', deleteEmployeeCode);
router.get('/all', getAllEmployeeCodes);

// Додати GET / для інформування про правильний endpoint
router.get('/', (req, res) => {
    res.status(400).json({
        error: "Use /api/employee-codes/all to fetch all employee codes"
    });
});

export default router;