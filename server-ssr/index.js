const express = require('express')
const path = require('path');
const fs = require('fs');
const serverBundle = path.resolve(process.cwd(), 'dist-server', 'vue-ssr-server-bundle.json')
const { createBundleRenderer } = require('vue-server-renderer')
const clientManifestPath = path.resolve(process.cwd(), 'dist', 'vue-ssr-client-manifest.json')
const clientManifest = require(clientManifestPath)
const compression = require('compression')
const history = require('connect-history-api-fallback')
// 创建渲染器
const template = fs.readFileSync(path.resolve(__dirname, '../ssr-template/index.html'), 'utf8');

// 客户端渲染清单将注入所有的css，占位符会被替换成服务端渲染后的html js
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})

const app = express()
app.use(compression())
app.use('/dist',express.static(path.join(__dirname, '../dist')))

app.get('*', (req, res) => {
  const context = {
    url: req.url,
    title: '豆子坑'
  }
  renderer.renderToString(context, (err, html) => {
    if(err) return res.status(500).send(err)
    res.status(200).header({
      contentType: 'text/html'
    }).send(html)
  })
})

app.listen(3000, () => {
  console.log('succeeded')
})