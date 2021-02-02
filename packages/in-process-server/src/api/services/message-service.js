const CacheService = require('../services/cache-service')
const Message = require("../models/message-model")
const Logger = require('../../config/logger')

const Cache = CacheService.getContext('message')
const logger = Logger.getLogger('message-service')

class MessageService {
    static async getMessage(id) {
        const cachedMesage = await Cache.recover(id)

        if (!cachedMesage) {
            logger.info(`cache miss message:${id}`)
            const message = await Message.findById(id)

            Cache.set(id, message)
            return message
        }
        return cachedMesage
    }

    static async searchByDescription(description) {
        const cachedMessage = await Cache.recover(description)

        if (!cachedMessage) {
            logger.info(`cache miss message:${description}`)
            const message = await Message.findOne({ description: { $regex: description } }).limit(10)

            Cache.set(description, message)
            return message
        }
        return cachedMessage
    }
}

module.exports = MessageService
