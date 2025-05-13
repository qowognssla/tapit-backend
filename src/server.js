import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import storeRoutes from './routes/store.routes.js'
import chatRoutes from './routes/chat.routes.js'
import { initSocket } from './socket/signaling.js'
import initSwagger from './swagger.js'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: '*' }
})

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/stores', storeRoutes)
app.use('/api/chat', chatRoutes)

// Swagger (라우트 이후에 위치해도 OK)
initSwagger(app)

// WebSocket
initSocket(io)

// DB 연결 및 서버 실행
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000
    server.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`)
      console.log(`📘 Swagger UI at http://localhost:${PORT}/api-docs`)
    })
  })
  .catch(err => console.error('❌ MongoDB connection error:', err))
