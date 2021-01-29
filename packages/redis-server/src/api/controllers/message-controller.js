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
        const { searchDescription } = req.params
        logger.trace(`receiving request for ${searchDescription}`)

        res.send(await MessageService.searchByDescription(searchDescription))
    }
}

module.exports = MessageController
