// src/socket/signaling.js
export const initSocket = (io) => {
    io.on('connection', (socket) => {
      console.log('Client connected: ', socket.id)
  
      socket.on('offer', (data) => {
        socket.to(data.target).emit('offer', data)
      })
  
      socket.on('answer', (data) => {
        socket.to(data.target).emit('answer', data)
      })
  
      socket.on('ice-candidate', (data) => {
        socket.to(data.target).emit('ice-candidate', data)
      })
  
      socket.on('disconnect', () => {
        console.log('Disconnected: ', socket.id)
      })
    })
  }
  