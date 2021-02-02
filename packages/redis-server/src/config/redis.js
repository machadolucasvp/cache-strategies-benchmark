const Redis = require('ioredis')
const Logger = require('./logger')

const logger = Logger.getLogger('redis')

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})

redis.on('error', (err) => logger.info('connection error', err))
redis.on('reconnecting', () => logger.info('reconnecting'))
redis.on('ready', () => logger.info('ready'))

module.exports = redis
