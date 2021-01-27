const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  description: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const Message = mongoose.model('message', messageSchema, 'messages')

module.exports = Message
