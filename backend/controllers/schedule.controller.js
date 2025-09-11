// backend/controllers/schedule.controller.js
import { Schedule, SHIFT_TYPES, SCHEDULE_ROLES } from '../models/schedule.model.js';
import { User, USER_ROLES } from '../models/user.module.js';

// Utility functions
const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const getDayOfWeek = (date) => {
  const days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
};

const generateShiftPattern = (startDate, totalDays, pattern = '3/3') => {
  const shifts = [];
  const [workDays, restDays] = pattern.split('/').map(Number);
  let isWorking = true;
  let dayCounter = 0;
  
  for (let i = 0; i < totalDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    const dayInfo = {
      date: currentDate,
      dayOfWeek: getDayOfWeek(currentDate),
      shift: SHIFT_TYPES.OFF,
      isAdditional: false
    };
    
    if (isWorking) {
      // Alternating between day and evening shifts for working days
      dayInfo.shift = (i % 2 === 0) ? SHIFT_TYPES.DAY : SHIFT_TYPES.EVENING;
      dayCounter++;
      
      if (dayCounter >= workDays) {
        isWorking = false;
        dayCounter = 0;
      }
    } else {
      dayCounter++;
      if (dayCounter >= restDays) {
        isWorking = true;
        dayCounter = 0;
      }
    }
    
    shifts.push(dayInfo);
  }
  
  return shifts;
};

// Create new schedule
export const createSchedule = async (req, res) => {
  try {
    const { month, year, role, title, generalComment, selectedEmployees, customShifts } = req.body;
    const adminId = req.userId;
    
    // Verify admin permissions
    const admin = await User.findById(adminId);
    if (!admin || admin.role !== USER_ROLES.ADMIN) {
      return res.status(403).json({
        success: false,
        message: "Тільки менеджери можуть створювати розклади"
      });
    }
    
    // Validate required fields
    if (!month || !year || !role || !selectedEmployees?.length) {
      return res.status(400).json({
        success: false,
        message: "Заповніть всі обов'язкові поля"
      });
    }
    
    // Check if schedule for this period already exists
    const existingSchedule = await Schedule.findOne({ month, year, role });
    if (existingSchedule) {
      return res.status(400).json({
        success: false,
        message: `Розклад для ${role} на ${month}/${year} вже існує`
      });
    }
    
    // Get employees data
    const employees = await User.find({
      '_id': { $in: selectedEmployees },
      'role': role
    });
    
    if (employees.length !== selectedEmployees.length) {
      return res.status(400).json({
        success: false,
        message: "Деякі працівники не знайдені або мають невідповідну роль"
      });
    }
    
    // Generate days for the month
    const daysInMonth = getDaysInMonth(month, year);
    const startDate = new Date(year, month - 1, 1);
    
    // Create schedule employees with their shifts
    const scheduleEmployees = employees.map(employee => {
      let employeeDays;
      
      // Check if custom shifts provided for this employee
      if (customShifts && customShifts[employee._id.toString()]) {
        // Use custom shifts
        employeeDays = [];
        for (let day = 1; day <= daysInMonth; day++) {
          const currentDate = new Date(year, month - 1, day);
          const customShift = customShifts[employee._id.toString()][day - 1];
          
          employeeDays.push({
            date: currentDate,
            dayOfWeek: getDayOfWeek(currentDate),
            shift: customShift || SHIFT_TYPES.OFF,
            isAdditional: customShift === SHIFT_TYPES.ADDITIONAL
          });
        }
      } else {
        // Generate standard 3/3 pattern
        employeeDays = generateShiftPattern(startDate, daysInMonth);
      }
      
      return {
        employee: employee._id,
        employeeName: `${employee.firstName} ${employee.lastName || ''}`.trim(),
        employeeEmail: employee.email,
        employeeRole: employee.role,
        days: employeeDays
      };
    });
    
    // Create schedule
    const schedule = new Schedule({
      title: title || `Розклад ${role} - ${month}/${year}`,
      month,
      year,
      role,
      createdBy: adminId,
      createdByName: `${admin.firstName} ${admin.lastName || ''}`.trim(),
      generalComment: generalComment || '',
      employees: scheduleEmployees,
      status: 'draft'
    });
    
    await schedule.save();
    
    res.status(201).json({
      success: true,
      message: "Розклад успішно створений",
      schedule: {
        _id: schedule._id,
        title: schedule.title,
        month: schedule.month,
        year: schedule.year,
        role: schedule.role,
        status: schedule.status,
        totalEmployees: schedule.totalEmployees,
        createdAt: schedule.createdAt
      }
    });
    
  } catch (error) {
    console.error("Помилка створення розкладу:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера при створенні розкладу"
    });
  }
};

// Get all schedules (admin only)
export const getAllSchedules = async (req, res) => {
  try {
    const adminId = req.userId;
    const { role, month, year, status } = req.query;
    
    // Verify admin permissions
    const admin = await User.findById(adminId);
    if (!admin || admin.role !== USER_ROLES.ADMIN) {
      return res.status(403).json({
        success: false,
        message: "Доступ заборонено"
      });
    }
    
    // Build filter
    const filter = {};
    if (role) filter.role = role;
    if (month) filter.month = parseInt(month);
    if (year) filter.year = parseInt(year);
    if (status) filter.status = status;
    
    const schedules = await Schedule.find(filter)
      .populate('createdBy', 'firstName lastName email')
      .sort({ year: -1, month: -1, createdAt: -1 });
    
    res.json({
      success: true,
      schedules: schedules.map(schedule => ({
        _id: schedule._id,
        title: schedule.title,
        month: schedule.month,
        year: schedule.year,
        role: schedule.role,
        status: schedule.status,
        isCurrent: schedule.isCurrent,
        totalEmployees: schedule.totalEmployees,
        totalWorkingDays: schedule.totalWorkingDays,
        createdBy: schedule.createdBy,
        createdAt: schedule.createdAt,
        publishedAt: schedule.publishedAt
      }))
    });
    
  } catch (error) {
    console.error("Помилка отримання розкладів:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера"
    });
  }
};

// Get schedule by ID
export const getScheduleById = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const userId = req.userId;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Користувач не знайдений"
      });
    }
    
    const schedule = await Schedule.findById(scheduleId)
      .populate('employees.employee', 'firstName lastName email role');
    
    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: "Розклад не знайдений"
      });
    }
    
    // If not admin, only return employee's personal data
    if (user.role !== USER_ROLES.ADMIN) {
      const personalSchedule = schedule.getEmployeePersonalSchedule(userId);
      if (!personalSchedule) {
        return res.status(404).json({
          success: false,
          message: "Ваш розклад не знайдений"
        });
      }
      
      return res.json({
        success: true,
        schedule: personalSchedule
      });
    }
    
    // Admin gets full schedule
    res.json({
      success: true,
      schedule
    });
    
  } catch (error) {
    console.error("Помилка отримання розкладу:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера"
    });
  }
};

// Get current employee's schedule
export const getMyCurrentSchedule = async (req, res) => {
  try {
    const userId = req.userId;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Користувач не знайдений"
      });
    }
    
    // Find current published schedule for user's role
    const schedule = await Schedule.getCurrentSchedule(user.role);
    
    if (!schedule) {
      return res.json({
        success: true,
        schedule: null,
        message: "Поточний розклад не знайдений"
      });
    }
  
    


  // Отримання особистого розкладу працівника
     
    const userEmail = user.email;
    const personalSchedule = schedule.getEmployeePersonalSchedule(userEmail);
    
    if (!personalSchedule) {
      return res.json({
        success: true,
        schedule: null,
        message: "Ви не включені в поточний розклад"
      });
    }
    
    res.json({
      success: true,
      schedule: personalSchedule
    });
    
  } catch (error) {
    console.error("Помилка отримання особистого розкладу:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера"
    });
  }
};






// Publish schedule
export const publishSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const adminId = req.userId;
    
    const admin = await User.findById(adminId);
    if (!admin || admin.role !== USER_ROLES.ADMIN) {
      return res.status(403).json({
        success: false,
        message: "Тільки менеджери можуть публікувати розклади"
      });
    }
    
    const schedule = await Schedule.findById(scheduleId);
    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: "Розклад не знайдений"
      });
    }
    
    // Unpublish any existing current schedule for this role
    await Schedule.updateMany(
      { role: schedule.role, isCurrent: true },
      { isCurrent: false }
    );
    
    // Publish this schedule
    await schedule.publish();
    
    res.json({
      success: true,
      message: "Розклад успішно опубліковано",
      schedule: {
        _id: schedule._id,
        status: schedule.status,
        isCurrent: schedule.isCurrent,
        publishedAt: schedule.publishedAt
      }
    });
    
  } catch (error) {
    console.error("Помилка публікації розкладу:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера"
    });
  }
};

// Update schedule
export const updateSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const { title, generalComment, employees } = req.body;
    const adminId = req.userId;
    
    const admin = await User.findById(adminId);
    if (!admin || admin.role !== USER_ROLES.ADMIN) {
      return res.status(403).json({
        success: false,
        message: "Тільки менеджери можуть редагувати розклади"
      });
    }
    
    const schedule = await Schedule.findById(scheduleId);
    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: "Розклад не знайдений"
      });
    }
    
    // Update fields
    if (title) schedule.title = title;
    if (generalComment !== undefined) schedule.generalComment = generalComment;
    if (employees) {
      // Update employee shifts
      schedule.employees = employees;
    }
    
    schedule.lastModifiedBy = adminId;
    await schedule.save();
    
    res.json({
      success: true,
      message: "Розклад успішно оновлено",
      schedule
    });
    
  } catch (error) {
    console.error("Помилка оновлення розкладу:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера"
    });
  }
};

// Delete schedule
export const deleteSchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const adminId = req.userId;
    
    const admin = await User.findById(adminId);
    if (!admin || admin.role !== USER_ROLES.ADMIN) {
      return res.status(403).json({
        success: false,
        message: "Тільки менеджери можуть видаляти розклади"
      });
    }
    
    const schedule = await Schedule.findById(scheduleId);
    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: "Розклад не знайдений"
      });
    }
    
    await Schedule.findByIdAndDelete(scheduleId);
    
    res.json({
      success: true,
      message: "Розклад успішно видалений"
    });
    
  } catch (error) {
    console.error("Помилка видалення розкладу:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера"
    });
  }
};

// Get employees by role for schedule creation
export const getEmployeesByRole = async (req, res) => {
  try {
    const { role } = req.params;
    const adminId = req.userId;
    
    const admin = await User.findById(adminId);
    if (!admin || admin.role !== USER_ROLES.ADMIN) {
      return res.status(403).json({
        success: false,
        message: "Доступ заборонено"
      });
    }
    
    if (!Object.values(SCHEDULE_ROLES).includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Невідома роль"
      });
    }
    
    const employees = await User.find({ 
      role: role,
      isVerified: true 
    }).select('firstName lastName email role createdAt');
    
    res.json({
      success: true,
      employees: employees.map(emp => ({
        _id: emp._id,
        name: `${emp.firstName} ${emp.lastName || ''}`.trim(),
        email: emp.email,
        role: emp.role,
        createdAt: emp.createdAt
      }))
    });
    
  } catch (error) {
    console.error("Помилка отримання працівників:", error);
    res.status(500).json({
      success: false,
      message: "Помилка сервера"
    });
  }
};