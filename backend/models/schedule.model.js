import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  month: { type: Number, required: true }, // 1-12
  year: { type: Number, required: true },
  type: { type: String, enum: ["manual", "imported"], default: "manual" },
  templateType: { type: String, default: "default" },
  data: { type: [[mongoose.Schema.Types.Mixed]], default: [] }, // 2D array: users x days
  userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  updatedAt: { type: Date, default: Date.now }
});

export const Schedule = mongoose.model("Schedule", ScheduleSchema);
