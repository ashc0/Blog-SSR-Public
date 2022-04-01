const nodeExternals = require('webpack-node-externals');
// const { defineConfig } = require('@vue/cli-service')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
module.exports = {
  // transpileDependencies: false,
  // outputDir: require('path').resolve(__dirname, './serverDist'),
  outputDir: 'serverDist',
  css: {
    extract: false // 不提取 css
  },
  configureWebpack: () => ({
    entry: './src/server-entry.js',
    devtool: 'source-map',
    target: 'node', // 目标为 node 环境
    output: {
      libraryTarget: 'commonjs2' // node 环境中以 cjs 引入模块
    },
    // 不需要编译node模块，因为会自动引入
    externals: nodeExternals({
      allowlist: [/\.css$ /] // 但是 css 模块需要编译
    }),
    optimization: {
      splitChunks: false // 代码全部载入内存
    },
    plugins: [
      new VueSSRServerPlugin()
    ]
  })
}