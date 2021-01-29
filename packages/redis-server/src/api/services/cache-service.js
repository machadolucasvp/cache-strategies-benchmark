const redis = require('../../config/redis')

class CacheService {
    static getContext(context) {
        return {
            recover: CacheService.recover(context),
            set: CacheService.set(context)
        }
    }
    static recover(context) {
        return async key => redis.get(`${context}:${key}`)
    }

    static set(context) {
        return async (key, data, ttl = 60000) =>
            redis.set(`${context}:${key}`, JSON.stringify(data), 'px', ttl)
    }
}

module.exports = CacheService
