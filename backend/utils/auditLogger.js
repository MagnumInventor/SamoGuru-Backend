import logger from './logger.js';

export const auditLog = (action, userId, resource, details = {}) => {
  logger.info('AUDIT_LOG', {
    action,
    userId,
    resource,
    timestamp: new Date().toISOString(),
    ...details
  });
};

export const AuditActions = {
  // User actions
  USER_SIGNUP: 'USER_SIGNUP',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_VERIFY_EMAIL: 'USER_VERIFY_EMAIL',
  USER_PASSWORD_RESET: 'USER_PASSWORD_RESET',
  USER_DELETED: 'USER_DELETED',
  
  // Schedule actions
  SCHEDULE_CREATED: 'SCHEDULE_CREATED',
  SCHEDULE_UPDATED: 'SCHEDULE_UPDATED',
  SCHEDULE_PUBLISHED: 'SCHEDULE_PUBLISHED',
  SCHEDULE_DELETED: 'SCHEDULE_DELETED',
  
  // Permission denied
  UNAUTHORIZED_ACCESS: 'UNAUTHORIZED_ACCESS'
};
