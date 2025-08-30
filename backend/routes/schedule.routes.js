import express from "express";
import { 
  createOrUpdateSchedule,
  importSchedule,
  getAllSchedules,
  getPersonalSchedule,
  savePersonalSchedule
} from "../controllers/schedule.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.use(verifyToken);

// Create/update monthly schedule (admin only)
router.post("/", createOrUpdateSchedule);

// Import schedule from Excel (admin only)
router.post("/import", importSchedule);

// Get all schedules (admin only)
router.get("/all", getAllSchedules);

// Get personal schedule (employee or admin)
router.get("/personal/:userId", getPersonalSchedule);

// Save personal schedule (employee or admin)
router.post("/personal/:userId", savePersonalSchedule);

export default router;
