// backend/routes/schedule.routes.js
import express from 'express';
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
import { verifyToken } from '../middleware/verifyToken.js';
import { validate, validationSchemas } from '../middleware/validate.middleware.js';
import { createScheduleLimiter, apiLimiter } from '../middleware/rateLimiter.middleware.js';

const router = express.Router();

// All schedule routes require authentication
router.use(verifyToken);
router.use(apiLimiter);

/**
 * @route POST /api/schedules
 * @desc Create a new schedule
 * @access Admin only
 * @body {month, year, role, title?, generalComment?, selectedEmployees, customShifts?}
 */
router.post('/', createScheduleLimiter, validate(validationSchemas.createSchedule), createSchedule);

/**
 * @route GET /api/schedules
 * @desc Get all schedules
 * @access Admin only
 * @query {role?, month?, year?, status?}
 */
router.get('/', getAllSchedules);

/**
 * @route GET /api/schedules/current
 * @desc Get current employee's schedule
 * @access All authenticated users
 */
router.get('/current', getMyCurrentSchedule);

/**
 * @route GET /api/schedules/:scheduleId
 * @desc Get schedule by ID
 * @access Admin or assigned employee
 */
router.get('/:scheduleId', getScheduleById);

/**
 * @route PUT /api/schedules/:scheduleId
 * @desc Update schedule
 * @access Admin only
 */
router.put('/:scheduleId', validate(validationSchemas.updateSchedule), updateSchedule);

/**
 * @route POST /api/schedules/:scheduleId/publish
 * @desc Publish schedule
 * @access Admin only
 */
router.post('/:scheduleId/publish', publishSchedule);

/**
 * @route DELETE /api/schedules/:scheduleId
 * @desc Delete schedule
 * @access Admin only
 */
router.delete('/:scheduleId', deleteSchedule);

/**
 * @route GET /api/schedules/employees/:role
 * @desc Get employees by role
 * @access Admin only
 */
router.get('/employees/:role', getEmployeesByRole);

export default router;