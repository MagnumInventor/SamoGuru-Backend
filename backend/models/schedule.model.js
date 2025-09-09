// backend/models/schedule.model.js
import mongoose from "mongoose";

const SHIFT_TYPES = {
  DAY: '1',      // 9:00-22:15
  EVENING: '16', // 16:00-23:00
  OFF: '0',      // День відпочинку
  ADDITIONAL: 'ADD' // Додаткова зміна
};

const SCHEDULE_ROLES = {
  ADMIN: 'admin',
  HELPER: 'helper', 
  WAITER: 'waiter'
};

// Схема для окремого дня в розкладі
const scheduleDaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  dayOfWeek: {
    type: String,
    required: true // пн, вт, ср, чт, пт, сб, нд
  },
  shift: {
    type: String,
    enum: Object.values(SHIFT_TYPES),
    default: SHIFT_TYPES.OFF
  },
  isAdditional: {
    type: Boolean,
    default: false
  },
  comment: {
    type: String,
    default: ''
  }
});

// Схема для працівника в розкладі
const scheduleEmployeeSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  employeeName: {
    type: String,
    required: true
  },
  employeeEmail: {
    type: String,
    required: true
  },
  employeeRole: {
    type: String,
    enum: Object.values(SCHEDULE_ROLES),
    required: true
  },
  days: [scheduleDaySchema],
  // Статистика для працівника
  totalWorkingDays: {
    type: Number,
    default: 0
  },
  totalDayShifts: {
    type: Number,
    default: 0
  },
  totalEveningShifts: {
    type: Number,
    default: 0
  },
  totalAdditionalShifts: {
    type: Number,
    default: 0
  }
});

// Основна схема розкладу
const scheduleSchema = new mongoose.Schema({
  // Базова інформація
  title: {
    type: String,
    required: true
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12
  },
  year: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    enum: Object.values(SCHEDULE_ROLES),
    required: true
  },
  
  // Автор розкладу
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdByName: {
    type: String,
    required: true
  },
  
  // Коментар до розкладу
  generalComment: {
    type: String,
    default: ''
  },
  
  // Працівники та їх розклади
  employees: [scheduleEmployeeSchema],
  
  // Статус розкладу
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  
  // Чи є цей розклад поточним для відображення користувачам
  isCurrent: {
    type: Boolean,
    default: false
  },
  
  // Дати публікації та архівування
  publishedAt: Date,
  archivedAt: Date,
  
  // Загальна статистика розкладу
  totalEmployees: {
    type: Number,
    default: 0
  },
  totalWorkingDays: {
    type: Number,
    default: 0
  },
  
  // Метадані
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lastModifiedAt: Date
}, { 
  timestamps: true 
});

// Індекси для оптимізації пошуку
scheduleSchema.index({ month: 1, year: 1, role: 1 });
scheduleSchema.index({ 'employees.employee': 1 });
scheduleSchema.index({ isCurrent: 1, status: 1 });
scheduleSchema.index({ createdBy: 1 });

// Middleware для автоматичного розрахунку статистики
scheduleSchema.pre('save', function() {
  // Розрахунок загальної статистики
  this.totalEmployees = this.employees.length;
  this.totalWorkingDays = this.employees.reduce((total, emp) => {
    return total + emp.days.filter(day => day.shift !== SHIFT_TYPES.OFF).length;
  }, 0);
  
  // Розрахунок статистики для кожного працівника
  this.employees.forEach(employee => {
    const workingDays = employee.days.filter(day => day.shift !== SHIFT_TYPES.OFF);
    employee.totalWorkingDays = workingDays.length;
    employee.totalDayShifts = employee.days.filter(day => day.shift === SHIFT_TYPES.DAY).length;
    employee.totalEveningShifts = employee.days.filter(day => day.shift === SHIFT_TYPES.EVENING).length;
    employee.totalAdditionalShifts = employee.days.filter(day => day.isAdditional).length;
  });

  this.lastModifiedAt = new Date();
});

// Статичні методи
scheduleSchema.statics.getCurrentSchedule = function(role) {
  return this.findOne({ 
    role: role, 
    isCurrent: true, 
    status: 'published' 
  }).populate('employees.employee', 'firstName lastName email');
};

scheduleSchema.statics.getEmployeeSchedule = function(employeeId, month, year) {
  return this.findOne({
    month: month,
    year: year,
    'employees.employee': employeeId,
    status: 'published'
  }, {
    'employees.$': 1,
    month: 1,
    year: 1,
    title: 1,
    generalComment: 1
  });
};

// Методи екземпляра
scheduleSchema.methods.publish = function() {
  this.status = 'published';
  this.publishedAt = new Date();
  this.isCurrent = true;
  return this.save();
};

scheduleSchema.methods.archive = function() {
  this.status = 'archived';
  this.archivedAt = new Date();
  this.isCurrent = false;
  return this.save();
};

scheduleSchema.methods.getEmployeePersonalSchedule = function(employeeId) {
  const employee = this.employees.find(emp => 
    emp.employee.toString() === employeeId.toString()
  );
  
  if (!employee) return null;
  
  return {
    month: this.month,
    year: this.year,
    title: this.title,
    generalComment: this.generalComment,
    employee: {
      name: employee.employeeName,
      email: employee.employeeEmail,
      role: employee.employeeRole,
      days: employee.days,
      stats: {
        totalWorkingDays: employee.totalWorkingDays,
        totalDayShifts: employee.totalDayShifts,
        totalEveningShifts: employee.totalEveningShifts,
        totalAdditionalShifts: employee.totalAdditionalShifts
      }
    }
  };
};

export const Schedule = mongoose.model('Schedule', scheduleSchema);
export { SHIFT_TYPES, SCHEDULE_ROLES };