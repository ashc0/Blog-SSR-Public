const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const TARGET_DEV = process.env.WEBPACK_TARGET === 'dev'
const TARGET_WEB = process.env.WEBPACK_TARGET === 'web'

const serverConfig = require('./vue.server.config')
const clientConfig = require('./vue.client.config')

if (TARGET_NODE) {
  module.exports = serverConfig
}
if (TARGET_WEB) {
  module.exports = clientConfig
}
if (TARGET_DEV) {
  module.exports = {
    configureWebpack: () => ({
      entry: './src/client-entry.js'
    })
  }
}