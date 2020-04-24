import Router from 'koa-router'
import controll from '../controller/forwardControll'

const router = new Router()
router.get('/forward/url', controll.url)

export default router
