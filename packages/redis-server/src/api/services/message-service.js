const CacheService = require('../services/cache-service')
const Message = require("../models/message-model")

const Cache = CacheService.getContext('message')

class MessageService {
    static async getMessage(id) {
        const cachedMesage = await Cache.recover(id)

        if (!cachedMesage) {
            const message = await Message.findById(id)

            return Cache.set(id, message)
        }
        return cachedMesage
    }

    static searchByDescription(description) {
        const cachedMessage = await Cache.recover(description)

        if (!cachedMessage) {
            const message = Message.find({ description: { $regex: description } })

            return Cache.set(description, message)
        }
        return cachedMessage
    }
}

module.exports = MessageService
