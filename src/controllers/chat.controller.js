import Room from '../models/room.model.js'
import Message from '../models/message.model.js'

export const createRoom = async (req, res) => {
  const { users } = req.body
  if (!users || users.length === 0) return res.status(400).json({ message: 'No users provided' })
  const room = await Room.create({ users, lastUpdated: new Date() })
  res.status(201).json(room)
}

export const getUserRooms = async (req, res) => {
  const { userId } = req.query
  const rooms = await Room.find({ users: userId }).sort({ lastUpdated: -1 })
  res.json(rooms)
}

export const updateRoom = async (req, res) => {
  const { id } = req.params
  const room = await Room.findByIdAndUpdate(id, req.body, { new: true })
  res.json(room)
}

export const deleteRoom = async (req, res) => {
  const { id } = req.params
  await Room.findByIdAndDelete(id)
  await Message.deleteMany({ roomId: id })
  res.json({ message: 'Room and messages deleted' })
}

export const postMessage = async (req, res) => {
  const message = await Message.create(req.body)
  await Room.findByIdAndUpdate(message.roomId, { lastUpdated: new Date() })
  res.status(201).json(message)
}

export const getMessages = async (req, res) => {
  const { roomId } = req.params
  const messages = await Message.find({ roomId }).sort({ createdAt: 1 })
  res.json(messages)
}

export const updateMessage = async (req, res) => {
  const { id } = req.params
  const updated = await Message.findByIdAndUpdate(id, req.body, { new: true })
  res.json(updated)
}

export const deleteMessage = async (req, res) => {
  const { id } = req.params
  await Message.findByIdAndDelete(id)
  res.json({ message: 'Deleted' })
}

