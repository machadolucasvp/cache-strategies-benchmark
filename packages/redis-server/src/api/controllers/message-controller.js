const MessageService = require('../services/message-service')
const Logger = require('../../config/logger')

const logger = Logger.getLogger('message-controller')

class MessageController {
    static async onGet(req, res) {
        const { id } = req.params
        logger.trace(`receiving request for ${id}`)

        res.send(await MessageService.getMessage(id))
    }

    static async onGetByDescription(req, res) {
        const { description } = req.query
        logger.trace(`receiving request for ${description}`)

        res.send(await MessageService.searchByDescription(description))
    }
}

module.exports = MessageController
