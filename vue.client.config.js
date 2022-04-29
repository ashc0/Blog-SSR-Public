const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = {
  pluginOptions: {
    compression: {
      modes: ['development', 'production'],
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      }
    }
  },
  configureWebpack: () => ({
    entry: './src/client-entry.js',
    devtool: 'module-cheap-source-map',
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    },
    target: 'web', // 目标为 web 环境
    plugins: [
      // 此插件作用是告诉服务端要把哪些js css资源放入html中
      new VueSSRClientPlugin()
    ]
  }),
  chainWebpack: config => {
    // 去除所有关于客户端生成的 html 配置，因为后端已经生成了
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}