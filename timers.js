document.addEventListener("DOMContentLoaded", function(){
  var reset = document.querySelector('#reset')
  var start = document.querySelector('#start')
  var pause = document.querySelector('#pause')
  var seconds = 0
  var timerId = document.querySelector('#timer')
  start.addEventListener ('click', updateTime)


  function updateTime(){
    var myVar = setInterval(function(){
      seconds ++
      timerId.textContent = seconds
    }, 1000)
    pause.addEventListener ('click', function(){clearInterval(myVar)})
    reset.addEventListener('click',function(){
    clearInterval(myVar)
    seconds = 0
    timerId.textContent = "Stop Watch"
  })
}
})

  //
  //
  // reset.addEventListener ('click', function)
  //






//
//
//
// start.addEventListener ('click', startWatch)
// console.log(myVar)
// reset.addEventListener

// var timer = {
//   reset : document.querySelector('#reset')
//   start : document.querySelector('#start')
//   pause : document.querySelector('#pause')
//   seconds : 0
//   minutes : 0
//   timerId : document.querySelector('#timer')
//   updateTime :function(){
//     seconds ++
//     document.querySelector('#timer').textContent = seconds
//     }
//   startWatch : function(){
//       setInterval(updateTime, 1000)}
// }
  //
  //
  // reset.addEventListener ('click', function)
  //
