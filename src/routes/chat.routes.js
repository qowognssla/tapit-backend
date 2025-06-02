import express from 'express'
import {
  createRoom, getUserRooms, updateRoom, deleteRoom,
  postMessage, getMessages, updateMessage, deleteMessage
} from '../controllers/chat.controller.js'

const router = express.Router()

// Rooms
router.post('/rooms', createRoom)
router.get('/rooms', getUserRooms)
router.put('/rooms/:id', updateRoom)
router.delete('/rooms/:id', deleteRoom)

// Messages
router.post('/messages', postMessage)
router.get('/messages/:roomId', getMessages)
router.patch('/messages/:id', updateMessage)
router.delete('/messages/:id', deleteMessage)

export default router