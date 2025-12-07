import logger from '../utils/logger.js';

export const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logLevel = res.statusCode >= 400 ? 'warn' : 'info';
    
    logger.log(logLevel, `${req.method} ${req.path}`, {
      status: res.statusCode,
      duration: `${duration}ms`,
      userId: req.userId || 'anonymous'
    });
  });

  next();
};
