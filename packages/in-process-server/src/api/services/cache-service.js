const cache = require('../../config/cache')

class CacheService {
    static getContext(context) {
        return {
            recover: CacheService.recover(context),
            set: CacheService.set(context)
        }
    }
    static recover(context) {
        return async key => cache.get(`${context}:${key}`)
    }

    static set(context) {
        return async (key, data) =>
            cache.set(`${context}:${key}`, data)
    }
}

module.exports = CacheService
