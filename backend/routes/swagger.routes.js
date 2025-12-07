import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerConfig } from '../config/swagger.config.js';

const specs = swaggerJsdoc(swaggerConfig);

export const setupSwagger = (app) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs, { 
    customCss: '.swagger-ui { font-family: "Segoe UI", sans-serif; }'
  }));
};
