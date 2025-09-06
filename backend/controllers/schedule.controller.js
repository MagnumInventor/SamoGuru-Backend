import { Schedule } from "../models/schedule.model.js";
import { User } from "../models/user.module.js";

// Helper: check admin
const isAdmin = async (userId) => {
  const user = await User.findById(userId);
  return user && user.role === "admin";
};

// Create/update monthly schedule (admin only)
export const createOrUpdateSchedule = async (req, res) => {
  const { month, year, data, userIds, templateType, type = "manual" } = req.body;
  try {
    if (!await isAdmin(req.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    let schedule = await Schedule.findOne({ month, year });
    if (schedule) {
      schedule.data = data;
      schedule.userIds = userIds;
      schedule.templateType = templateType;
      schedule.type = type;
      schedule.updatedAt = Date.now();
      await schedule.save();
    } else {
      schedule = await Schedule.create({
        month, year, data, userIds, templateType, type, createdBy: req.userId
      });
    }
    res.json({ success: true, schedule });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Import schedule from Excel (admin only, accepts parsed data)
export const importSchedule = async (req, res) => {
  const { month, year, data, userIds, templateType } = req.body;
  try {
    if (!await isAdmin(req.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    const schedule = await Schedule.create({
      month, year, data, userIds, templateType, type: "imported", createdBy: req.userId
    });
    res.json({ success: true, schedule });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all schedules (admin only)
export const getAllSchedules = async (req, res) => {
  try {
    if (!await isAdmin(req.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    const schedules = await Schedule.find().populate("userIds", "firstName lastName email");
    res.json({ success: true, schedules });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get personal schedule (by userId)
export const getPersonalSchedule = async (req, res) => {
  const { userId } = req.params;
  try {
    // Allow user to get their own schedule or admin to get any
    if (req.userId !== userId && !await isAdmin(req.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    const schedules = await Schedule.find({ userIds: userId });
    res.json({ success: true, schedules });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Save personal schedule for employee
export const savePersonalSchedule = async (req, res) => {
  const { userId } = req.params;
  const { month, year, data } = req.body;
  try {
    if (req.userId !== userId && !await isAdmin(req.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    let schedule = await Schedule.findOne({ month, year, userIds: userId });
    if (schedule) {
      schedule.data = data;
      schedule.updatedAt = Date.now();
      await schedule.save();
    } else {
      schedule = await Schedule.create({
        month, year, data, userIds: [userId], createdBy: req.userId, type: "manual"
      });
    }
    res.json({ success: true, schedule });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add to schedule.controller.js:
export const deleteSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    if (!await isAdmin(req.userId)) {
      return res.status(403).json({ message: "Access denied" });
    }
    await Schedule.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
