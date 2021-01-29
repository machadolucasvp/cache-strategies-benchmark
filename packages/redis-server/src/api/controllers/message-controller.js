const MessageService = require('../services/message-service')

class MessageController {
    static async onGet(req, res) {
        const { id } = req.params

        res.send(await MessageService.getMessage(id))
    }

    static async onGetByDescription(req, res) {
        const { searchDescription } = req.params

        res.send(await MessageService.searchByDescription(searchDescription))
    }
}

module.exports = MessageController
