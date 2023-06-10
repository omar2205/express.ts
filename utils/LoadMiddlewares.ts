import * as path from 'path'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
// import multer from 'multer'
import timeout from 'connect-timeout'
import { Express } from 'express'

import rfs from 'rotating-file-stream'

function setup_log_folder() {
  return rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(import.meta.url, 'log'),
  })
}

export function load_middlewares(app: Express) {
  app.use(cookieParser())
  app.use(cors())
  app.use(helmet())
  const access_log_stream = setup_log_folder()
  app.use(morgan('tiny', { stream: access_log_stream }))
  app.use(timeout('6s'))
}
