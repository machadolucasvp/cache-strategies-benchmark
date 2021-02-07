const express = require('express')
const MessageController = require('../controllers/message-controller.js')

const router = express.Router()

router.route('/search').get(MessageController.onGetByDescription)

module.exports = router
