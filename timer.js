export default function Timer(
  minutes,
  minutesDisplay,
  seconds,
  secondsDisplay,
  timeTimer,
  
  ){
    
    

    function moreMinutes() {
      minutes = Number(minutesDisplay.textContent)  
      minutesDisplay.textContent =String (minutes + 5).padStart(2,0)
      secondsDisplay.textContent = "00"
    }

    
    function lessMinutes() {
      minutes = Number(minutesDisplay.textContent)
      if(minutes<=5){
        minutesDisplay.textContent = "00"
        secondsDisplay.textContent = "00"
        return
      }
      minutesDisplay.textContent =String (minutes - 5).padStart(2,0)
    }

    function stopcont(){
      clearTimeout(timeTimer)
    }
    
 
    function contDown() {
    timeTimer = setTimeout(function () {
    seconds = Number(secondsDisplay.textContent)
    minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      minutesDisplay.textContent = "00"
      secondsDisplay.textContent = "00"
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, 0)
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, 0)

    contDown()

  }, 1000)

}

return {moreMinutes, lessMinutes, contDown,stopcont}
}