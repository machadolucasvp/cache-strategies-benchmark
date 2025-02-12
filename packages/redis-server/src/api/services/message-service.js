const compose = require('lodash/fp/compose')
const CacheService = require('../services/cache-service')
const Message = require("../models/message-model")
const Logger = require('../../config/logger')
const Util = require('../../helpers/util')

const Cache = CacheService.getContext('message')
const logger = Logger.getLogger('message-service')

class MessageService {
    static async getByDescription(description) {
        const allCacheMessages = JSON.parse(await Cache.recover('all')) || []

        let foundMessage = MessageService.searchByDescription(allCacheMessages, description)
        if (foundMessage.length == 0) {
            logger.info(`cache miss message:all for ${description}`)
            const allMessages = await Message.find()
            foundMessage = MessageService.searchByDescription(allMessages, description)

            if (foundMessage) Cache.set('all', allMessages)
        }
        return foundMessage
    }

    static searchByDescription(messages, description) {
        const getDescription = message => message.description || ''
        const isMessageMatch = compose(Util.isStrMatch(description), getDescription)

        return messages.filter(isMessageMatch)
    }
}

module.exports = MessageService
