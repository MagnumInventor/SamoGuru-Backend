import Joi from 'joi';

export const validationSchemas = {
  // Auth schemas
  signup: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Некоректна електронна пошта',
      'any.required': 'Email обов\'язковий'
    }),
    firstName: Joi.string().min(3).max(50).required().messages({
      'string.min': 'Ім\'я повинно містити мінімум 3 символи',
      'any.required': 'Ім\'я обов\'язкове'
    }),
    password: Joi.string().min(4).required().messages({
      'string.min': 'Пароль повинен містити мінімум 4 символів',
      'any.required': 'Пароль обов\'язковий'
    }),
    role: Joi.string().valid('admin', 'waiter', 'helper', 'trainee').default('trainee'),
    employeeCode: Joi.string().optional(),
    adminCode: Joi.string().optional()
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),

  verifyEmail: Joi.object({
    code: Joi.string().length(32).required()
  }),

  forgotPassword: Joi.object({
    email: Joi.string().email().required()
  }),

  resetPassword: Joi.object({
    password: Joi.string().min(6).required()
  }),

  // Schedule schemas
  createSchedule: Joi.object({
    month: Joi.number().integer().min(1).max(12).required(),
    year: Joi.number().integer().min(2020).max(2100).required(),
    role: Joi.string().required(),
    title: Joi.string().max(200).optional(),
    generalComment: Joi.string().max(1000).optional(),
    selectedEmployees: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).min(1).required(),
    customShifts: Joi.object().optional()
  }),

  updateSchedule: Joi.object({
    title: Joi.string().max(200).optional(),
    generalComment: Joi.string().max(1000).optional(),
    employees: Joi.array().optional()
  }),

  publishSchedule: Joi.object({
    scheduleId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
  })
};

export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const messages = error.details.map(detail => detail.message);
      return res.status(400).json({
        success: false,
        message: "Помилка валідації вхідних даних",
        errors: messages
      });
    }

    req.body = value;
    next();
  };
};

export const validateParams = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.params, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const messages = error.details.map(detail => detail.message);
      return res.status(400).json({
        success: false,
        message: "Помилка валідації параметрів",
        errors: messages
      });
    }

    req.params = value;
    next();
  };
};
