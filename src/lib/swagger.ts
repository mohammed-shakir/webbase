import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'WebBase',
    version: '1.0.0',
    description: 'Auto-generated Swagger docs for API routes',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: { type: 'http', scheme: 'bearer' },
    },
    schemas: {
      Announcement: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          body: { type: 'string' },
          createdAt: { type: 'string' },
        },
        required: ['id', 'message', 'createdAt'],
      },
      FeedbackRequest: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          message: { type: 'string' },
        },
        required: ['email', 'message'],
      },
      FeedbackResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          message: { type: 'string' },
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
};

export const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: [
    path.resolve(process.cwd(), 'src/app/api/**/*.ts'),
    path.resolve(process.cwd(), 'src/lib/**/*.ts'),
    path.resolve(process.cwd(), 'src/types/**/*.ts'),
  ],
});
