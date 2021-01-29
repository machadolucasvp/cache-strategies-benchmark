const Redis = require('ioredis');

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})

redis.on('error', (err) => console.log('[REDIS] connection error', err))
redis.on('reconnecting', () => console.log('[REDIS] reconnecting'))
redis.on('ready', () => console.log('[REDIS] ready'))

module.exports = redis
