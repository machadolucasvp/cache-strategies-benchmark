const Message = require("../models/message-model")

class MessageService {
    static getMessage(id) {
        return Message.findById(id)
    }
}

module.exports = MessageService
