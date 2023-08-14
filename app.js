const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./routes/storeRoutes')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'))
app.use("/", router)

app.listen('3000', () => console.log("Server running on port 3000"))