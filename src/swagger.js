import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TapIt API Docs',
      version: '1.0.0',
      description: 'Backend API for TapIt platform',
    },
    servers: [{ url: 'http://localhost:5000' }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  security: [{ bearerAuth: [] }], // 모든 경로에 기본 적용
  },

  apis: ['./src/routes/*.js'], // 주석 기반 문서 생성
}

const specs = swaggerJsdoc(options)

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}
