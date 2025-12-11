// backend/models/schedule.model.js
import mongoose from "mongoose";

export const SHIFT_TYPES = {
  DAY: 'day',
  EVENING: 'evening',
  NIGHT: 'night',
  OFF: 'off',
  ADDITIONAL: 'additional'
};

export const SCHEDULE_ROLES = {
  WAITER: 'waiter',
  HELPER: 'helper'
};

// Схема для окремого дня в розкладі
const daySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  dayOfWeek: String,
  shift: {
    type: String,
    enum: Object.values(SHIFT_TYPES),
    default: SHIFT_TYPES.OFF
  },
  isAdditional: {
    type: Boolean,
    default: false
  }
}, { _id: false });

// Схема для працівника в розкладі
const employeeScheduleSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  employeeName: String,
  employeeEmail: String,
  employeeRole: String,
  days: [daySchema]
}, { _id: false });

// Основна схема розкладу
const scheduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
    index: true
  },
  year: {
    type: Number,
    required: true,
    index: true
  },
  role: {
    type: String,
    enum: Object.values(SCHEDULE_ROLES),
    required: true,
    index: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
    index: true
  },
  isCurrent: {
    type: Boolean,
    default: false,
    index: true
  },
  totalEmployees: {
    type: Number,
    default: 0
  },
  totalWorkingDays: {
    type: Number,
    default: 0
  },
  generalComment: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  createdByName: String,
  lastModifiedBy: mongoose.Schema.Types.ObjectId,
  employees: [employeeScheduleSchema],
  publishedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Compound indexes for common queries
scheduleSchema.index({ month: 1, year: 1, role: 1 }, { unique: true });
scheduleSchema.index({ status: 1, isCurrent: 1 });
scheduleSchema.index({ createdBy: 1, createdAt: -1 });
scheduleSchema.index({ role: 1, status: 1, isCurrent: 1 });

// Methods
scheduleSchema.methods.publish = function() {
  this.status = 'published';
  this.isCurrent = true;
  this.publishedAt = new Date();
  return this.save();
};

scheduleSchema.statics.getCurrentSchedule = async function(role) {
  return this.findOne({
    role,
    isCurrent: true,
    status: 'published'
  });
};

scheduleSchema.methods.getEmployeePersonalSchedule = function(employeeId) {
  const employeeSchedule = this.employees.find(
    emp => emp.employee.toString() === employeeId.toString()
  );
  
  if (!employeeSchedule) return null;
  
  return {
    _id: this._id,
    title: this.title,
    month: this.month,
    year: this.year,
    role: this.role,
    days: employeeSchedule.days,
    generalComment: this.generalComment
  };
};

scheduleSchema.pre('save', function(next) {
  this.totalEmployees = this.employees.length;
  
  let workingDays = 0;
  this.employees.forEach(emp => {
    workingDays += emp.days.filter(
      day => day.shift !== SHIFT_TYPES.OFF
    ).length;
  });
  this.totalWorkingDays = workingDays;
  
  next();
});

export const Schedule = mongoose.model('Schedule', scheduleSchema);