//Your code here
const justInvoke = function(fn) {
  return fn()
}

const setThisWithCall = function(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}
