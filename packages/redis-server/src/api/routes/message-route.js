const express = require('express')
const MessageController = require('../controllers/message-controller.js')

const router = express.Router()

router.route('/:id').get(MessageController.onGet)
router.route('/:searchDescription').get(MessageController.onGetByDescription)

module.exports = router
