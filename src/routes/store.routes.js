import express from 'express'
const router = express.Router()

// 예시 라우트
router.get('/', (req, res) => {
  res.send('store route works!')
})

export default router  // ✅ 반드시 이 줄 필요
