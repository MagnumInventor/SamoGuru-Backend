export const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SamoGuru Restaurant API',
      version: '1.0.0',
      description: 'REST API for restaurant schedule and employee management',
      contact: {
        name: 'SamoGuru Support',
        email: 'support@samoguru.com'
      }
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:5000/api',
        description: 'Production Server'
      },
      {
        url: 'http://localhost:5000/api',
        description: 'Development Server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            role: { type: 'string', enum: ['admin', 'waiter', 'helper', 'trainee'] },
            isVerified: { type: 'boolean' }
          }
        },
        Schedule: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            title: { type: 'string' },
            month: { type: 'number' },
            year: { type: 'number' },
            role: { type: 'string' },
            status: { type: 'string', enum: ['draft', 'published'] },
            totalEmployees: { type: 'number' }
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./backend/routes/*.js']
};
