const express = require('express')
const morgan = require('morgan')
const router = require('./routes/storeRoutes')
const app = express()

app.use(router)
app.use(morgan('dev'))

app.listen('3000', () => console.log("Server running on port 3000"))