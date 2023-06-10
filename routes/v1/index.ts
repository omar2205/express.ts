import express from 'express'

const v1_router = express.Router()

v1_router.get('/', (req, res) => {
  res.end('V1 Router :)')
})

export default v1_router
