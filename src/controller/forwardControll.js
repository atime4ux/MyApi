import axios from 'axios'
import xmljs from 'xml-js'
// import model from '../model'
import log from '../lib/log'

const controll = {
  url: async (ctx) => {
    log('start forward Url', `\r\n\t${JSON.stringify(ctx.headers)}`)

    // const postVal = ctx.request.body.postVal
    const forwardUrl = ctx.query.getVal

    try {
      const received = await axios.get(forwardUrl)

      Object.keys(received.headers).forEach((k) => {
        ctx.set(k, received.headers[k])
      })

      const xmlData = received.data
      const jsData = xmljs.xml2js(xmlData)
      const xmlDataAfter = xmljs.js2xml(jsData)

      ctx.body = xmlDataAfter
      // model.data = { post: postVal, get: getVal }
      // model.error = null
      // model.result = true
    } catch (err) {
      console.log(err)
      log('error forward Url', err)
      // model.result = false
      // model.error = 'System Error'
      // model.data = null
    }
  },
}
export default controll
