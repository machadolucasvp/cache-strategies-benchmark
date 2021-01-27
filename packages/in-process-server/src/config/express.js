const express = require('express')
const helmet = require('helmet')
const routes = require('../api/routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(helmet())

app.use(routes)

module.exports = app
