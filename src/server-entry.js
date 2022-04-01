import createApp from './app'

export default context => {
  // 由于存在异步路由，因此采用 promise
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context)
    router.push(context.url) // 设置服务端渲染的url位置
    // https://v3.router.vuejs.org/zh/api/#router-onready
    // 等待异步组件解析完毕
    router.onReady(() => {
      //https://v3.router.vuejs.org/zh/api/#router-getmatchedcomponents
      // 返回目标位置/当前路由的组件数组（是数组的定义/构造类，不是实例）
      const matchedComponents = router.getMatchedComponents()
      // 如果匹配不到组件，代表不存在该路由
      if(!matchedComponents.length) {
        return reject({code: 404})
      }
      // 返回 app
      resolve(app)
    }, reject)  // 第二个参数为错误回调列表
  })



  // 将请求的url传递给 router 以便得知哪些组件要渲染


}