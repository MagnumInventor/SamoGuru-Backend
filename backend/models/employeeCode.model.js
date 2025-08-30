// backend/models/employeeCode.model.js
import mongoose from "mongoose";

const employeeCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  isUsed: {
    type: Boolean,
    default: false
  },
  usedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  usedAt: {
    type: Date,
    default: null
  },
// createdBy: {
//    type: mongoose.Schema.Types.ObjectId,
//    ref: 'User',
//    required: true
//  },
  description: {
    type: String,
    default: ''
  }
}, { timestamps: true });

export const EmployeeCode = mongoose.model('EmployeeCode', employeeCodeSchema);