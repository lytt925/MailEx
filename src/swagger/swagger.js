const fs = require('fs')
const swaggerJsDoc = require('swagger-jsdoc')

const PORT = process.env.PORT || 4000;
const BASE_URL = process.env.BASE_URL || 'http://localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "MailEx API",
      version: '1.0.0',
      description: 'Swagger Docs for MailEx API'
    },
    servers: [
      { url: NODE_ENV === 'development' ? `${BASE_URL}:${PORT}/api/1.0` : `${BASE_URL}/api/1.0` },
    ]
  },
  apis: ['src/index.js', 'src/routes/*.js', 'src/swagger/schema.js']
}

const swaggerDocs = swaggerJsDoc(options)
fs.writeFileSync('./src/swagger/swagger.json', JSON.stringify(swaggerDocs, null, 2));
exports.swaggerDocs = swaggerDocs
