export function getItem(item) {
  return window.localStorage.getItem(item)
}

export function setItem(item, value) {
  window.localStorage.setItem(item, value)
}