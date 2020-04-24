import combineRouters from 'koa-combine-routers'
import forwardRT from './forwardRT'

const router = combineRouters(forwardRT)

export default router
