const MessageService = require('../services/message-service')

class MessageController {
    static async onGet(req, res) {
        const { id } = req.params 

        res.send(await MessageService.getMessage(id))
    }
}

module.exports = MessageController
