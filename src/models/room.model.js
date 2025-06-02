import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  users: [{ type: String, required: true }], // user._id들
  typingUsers: [{ type: String }],
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true })

export default mongoose.model('Room', roomSchema)
