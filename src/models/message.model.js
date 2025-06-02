// src/models/message.model.js
import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  senderId: { type: String, required: true },
  username: { type: String },
  avatar: { type: String },
  content: { type: String },
  timestamp: { type: Date, default: Date.now },
  seen: { type: Boolean, default: false },
  saved: { type: Boolean, default: true },
  distributed: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  files: { type: Array, default: [] },
  reactions: { type: Object, default: {} },
  replyMessage: { type: Object, default: null }
}, {
  timestamps: true
})

export default mongoose.model('Message', messageSchema)
