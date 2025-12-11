import rateLimit from 'express-rate-limit';

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windowMs
  message: 'Занадто багато спроб входу, спробуйте пізніше',
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req, res) => {
    // Skip rate limiting for admin IPs or test environments
    return process.env.NODE_ENV === 'test';
  }
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per windowMs
  message: 'Занадто багато запитів, спробуйте пізніше',
  standardHeaders: true,
  legacyHeaders: false
});

export const createScheduleLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // 20 schedule creations per hour
  message: 'Занадто багато розкладів створено, спробуйте пізніше',
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.userId // Rate limit per user
});
