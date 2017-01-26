document.addEventListener('DOMContentLoaded', function () {
  var reset = document.querySelector('#reset')
  var start = document.querySelector('#start')
  var pause = document.querySelector('#pause')
  var seconds = 0
  var timerId = document.querySelector('#timer')
  start.addEventListener('click', updateTime)

  function updateTime () {
    var myVar = setInterval(function () {
      seconds++
      timerId.textContent = seconds
    }, 1000)
    pause.addEventListener('click', function () { clearInterval(myVar) })
    reset.addEventListener('click', function () {
      clearInterval(myVar)
      seconds = 0
      timerId.textContent = 'Stop Watch'
    })
  }
})
