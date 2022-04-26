module.exports = function(cb, delay = 300) {
  let flag = true,timer = null
  return (...args) => {
    if(!flag) return
    flag = false
    timer = setTimeout((args) => {
      flag = true
      clearInterval(item)
    }, delay)
  }
}