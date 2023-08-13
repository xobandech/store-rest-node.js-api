const express = require('express')
const morgan = require('morgan')
const app = express()

app.use()
app.use(morgan('dev'))

app.listen('3001', () => console.log("Server running on port 3000"))