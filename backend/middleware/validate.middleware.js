import Joi from 'joi';

export const validationSchemas = {
  // Auth schemas
  signup: Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(2).max(50).required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'waiter', 'helper', 'trainee').default('trainee'),
    employeeCode: Joi.string().when('role', {
      is: Joi.string().valid('waiter', 'helper'),
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    adminCode: Joi.string().when('role', {
      is: 'admin',
      then: Joi.required(),
      otherwise: Joi.optional()
    })
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),

  verifyEmail: Joi.object({
    code: Joi.string().required()
  }),

  forgotPassword: Joi.object({
    email: Joi.string().email().required()
  }),

  resetPassword: Joi.object({
    password: Joi.string().min(6).required()
  }),

  // Schedule schemas
  createSchedule: Joi.object({
    month: Joi.number().min(1).max(12).required(),
    year: Joi.number().min(2020).max(2100).required(),
    role: Joi.string().required(),
    title: Joi.string().max(200).optional(),
    generalComment: Joi.string().max(1000).optional(),
    selectedEmployees: Joi.array().items(Joi.string()).min(1).required(),
    customShifts: Joi.object().optional()
  }),

  updateSchedule: Joi.object({
    title: Joi.string().max(200).optional(),
    generalComment: Joi.string().max(1000).optional(),
    employees: Joi.array().optional()
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
        message: "Ошибка валидации",
        errors: messages
      });
    }

    req.body = value;
    next();
  };
};
