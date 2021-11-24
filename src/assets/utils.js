let timeout = null
function debounce(fn, wait) {
  if(timeout !== null) clearTimeout(timeout)
  timeout = setTimeout(fn, wait)
}

function throttle(fn, interval) {
  let last = 0
    return function () {
      let context = this
      let args = arguments
      let now = +new Date()
            if (now - last >= interval) {
          last = now;
          fn.apply(context, args);
      }
    }
}
export default {debounce, throttle}
