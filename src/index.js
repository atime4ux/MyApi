import Koa from 'koa'
import cors from '@koa/cors'
import logger from 'koa-logger'
// import koaBody from 'koa-body'
// import session from 'koa-session'
// import cookie from 'koa-cookie'
import router from './router'
import config from './config'
import log from './lib/log'

const app = new Koa()
app.proxy = true
app.use(cors())

app.use(logger())
// app.use(koaBody({ multipart: true }))
app.use(router())

if (process.env.NODE_ENV
  && (process.env.NODE_ENV).trim().toLowerCase() === 'dev') {
  process.env.NODE_ENV = 'dev'
} else {
  process.env.NODE_ENV = 'staging'
}

const port = process.env.NODE_ENV === 'dev' ? config.port.dev : config.port.staging

app.listen(port, () => {
  log("root", `server started http://localhost:${port}`)
  console.log(`server started http://localhost:${port}`)
})

export default app
