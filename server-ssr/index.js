const express = require('express')
const path = require('path');
const fs = require('fs');
const serverBundle = path.resolve(process.cwd(), 'serverDist', 'vue-ssr-server-bundle.json')
const { createBundleRenderer } = require('vue-server-renderer')
const clientManifestPath = path.resolve(process.cwd(), 'dist', 'vue-ssr-client-manifest.json')
const clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'))
// const compression = require('compression')
// const history = require('connect-history-api-fallback')
// 创建渲染器
const template = fs.readFileSync(path.resolve(__dirname, '../ssr-template/index.html'), 'utf8');

// 客户端渲染清单将注入所有的css，占位符会被替换成服务端渲染后的html js
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})

const app = express()
// app.use(compression())
app.use(express.static(path.resolve(process.cwd(), 'dist')));

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

app.listen(4396, () => {
  console.log('succeeded')
})

// const express = require('express');
// const {createBundleRenderer} = require('vue-server-renderer');
// const path = require('path');
// const fs = require('fs');
// const app = express();
// const serverBundle = path.resolve(process.cwd(), './serverDist', 'vue-ssr-server-bundle.json');
// const clientManifestPath = path.resolve(process.cwd(), './dist', 'vue-ssr-client-manifest.json');
// const clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'));
// const template = fs.readFileSync(path.resolve(__dirname, '../ssr-template/index.html'), 'utf-8');
// const renderer = createBundleRenderer(serverBundle, {
//     template,
//     clientManifest
// });

// app.use(express.static(path.resolve(process.cwd(), 'dist')));