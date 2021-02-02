const LRUCache = require('lru-cache');

const cache = new LRUCache({
    max: parseInt(process.env.MAX_CACHE_SIZE),
    maxAge: 60000
})

module.exports = cache
