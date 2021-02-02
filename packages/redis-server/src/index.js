require('dotenv').config()
const Mongo = require('./config/mongodb')
const app = require('./config/express')
const Logger = require('./config/logger')

const logger = Logger.getLogger('server')

Mongo.bootstrap()
app.listen(process.env.API_PORT, () => logger.info(`listening on ${process.env.API_PORT}`))

module.exports = app
