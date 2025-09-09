// backend/routes/schedule.routes.js
import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  getMyCurrentSchedule,
  publishSchedule,
  updateSchedule,
  deleteSchedule,
  getEmployeesByRole
} from '../controllers/schedule.controller.js';

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// Admin routes (require admin role verification in controller)
router.post('/create', createSchedule);
router.get('/all', getAllSchedules);
router.get('/employees/:role', getEmployeesByRole);
router.put('/:scheduleId', updateSchedule);
router.post('/:scheduleId/publish', publishSchedule);
router.delete('/:scheduleId', deleteSchedule);

// Employee routes (accessible by all authenticated users)
router.get('/my-current', getMyCurrentSchedule);
router.get('/:scheduleId', getScheduleById);

export default router;