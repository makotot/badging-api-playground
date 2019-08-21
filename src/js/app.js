if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.error(err)
    })
  })

  window.ExperimentalBadge.set()

  let counter = 0

  const count = (isIncrement) => {
    if (isIncrement) {
      return ++counter
    }
    return counter ? --counter : 0
  }

  document.getElementById('js-increment').addEventListener('click', () => {
    window.ExperimentalBadge.set(count(true))
    console.log(counter)
  })
  document.getElementById('js-decrement').addEventListener('click', () => {
    window.ExperimentalBadge.set(count(false))
    console.log(counter)
  })
  document.getElementById('js-clear').addEventListener('click', () => {
    window.ExperimentalBadge.clear()
    console.log(counter)
  })
}
