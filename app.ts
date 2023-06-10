import express from 'express'

import v1_router from './routes/v1/index.js'
import { load_middlewares } from './utils/LoadMiddlewares.js'

const app = express()
load_middlewares(app)

app.use('/api/v1', v1_router)

app.get('/', (req, res) => {
  res.end('hello')
})

app.listen(3000, () => {
  console.log('Server online: 3000')
})
