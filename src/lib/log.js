import log4js from 'log4js'
import moment from 'moment'
import config from '../config'

const devFileName = `./log/${moment().format('YYYYMMDDHH')}.log`
const stagingFileName = `/home/apilogs/${config.app.name}/${moment().format('YYYYMMDDHH')}.log`
const filename = process.env.NODE_ENV && (process.env.NODE_ENV).trim().toLowerCase() === 'dev' ? devFileName : stagingFileName

log4js.configure({
  appenders: {
    everything: {
      type: 'file',
      filename,
    },
  },
  categories: {
    default: { appenders: ['everything'], level: 'debug' },
  },
})
const logger = log4js.getLogger()

const log = (module, message) => {
  logger.debug(`[${config.app.name}] ${module} : ${message}`)
}

export default log
