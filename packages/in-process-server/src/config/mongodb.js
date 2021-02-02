const mongoose = require('mongoose')
const Logger = require('./logger')

const logger = Logger.getLogger('mongodb')

const bootstrap = () =>
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    keepAlive: 1,
  })

const onError = (error) => {
  logger.warn('a problem occurred', error)
  throw new Error('failed to connect with mongodb')
}

mongoose.connection.on('disconnect', () => {
  logger.warn('disconnected')
  bootstrap();
})

mongoose.connection.on('error', onError)

module.exports = { bootstrap }
