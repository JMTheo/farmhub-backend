const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const dotenv = require('dotenv')

dotenv.config()

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(compression())

app.use(routes)

module.exports = app
