// const express = require('express')
// const cors = require('cors')
// const swaggerUi = require('swagger-ui-express')
// const indexRouter = require('./routes/index')
// const { swaggerDocs } = require('./swagger/swagger')
// const { sequelize } = require('./models/db')
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import indexRouter from './routes/index.js'
import swaggerDocs from './swagger/swagger.js'
import db from './db.js'


const PORT = process.env.PORT || 4000;
const BASE_URL = process.env.BASE_URL || 'http://localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log(`BASE_URL: ${BASE_URL}`)
console.log(`NODE_ENV: ${NODE_ENV}`)

// Create a new express app
const app = express()
app.use(express.json());
app.use(cors())

// Define routers
const apiPath = '/api/1.0';
app.use(apiPath, indexRouter)

// Add the swagger docs route to the express app
app.use(`${apiPath}/docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
)

app.listen(PORT, () => {
  console.log(`Listening on ${BASE_URL}:${PORT}`);
});