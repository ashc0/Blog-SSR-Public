export default function(cb, delay = 300) {
  let flag = true,timer = null
  return (...args) => {
    if(!flag) return
    flag = false
    timer = setTimeout(() => {
      flag = true
      clearInterval(timer)
      cb(...args)
    }, delay)
  }
}