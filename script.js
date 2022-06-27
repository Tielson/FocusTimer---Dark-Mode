import Timer from "./timer.js"
import Sounds from "./sons.js"

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const moreButton = document.querySelector('.more')
const lessButton = document.querySelector('.less')
const forestButton = document.querySelector('.forest')
const rainButton = document.querySelector('.rain')
const coffeButton = document.querySelector('.coffe')
const fireplaceButton = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const foresttButton = document.querySelector('.forestt')
const rainnButton = document.querySelector('.rainn')
const coffeeButton = document.querySelector('.coffee')
const fireplaceeButton = document.querySelector('.fireplacee')
const forestvolume = document.querySelector('.forestAudio')
const rainvolume = document.querySelector('.rainAudio')
const coffevolume = document.querySelector('.coffeeAudio')
const fireplacevolume = document.querySelector('.fireplaceAudio')
const ligthModeButton = document.querySelector('.ligthMode')
const darkModeButton = document.querySelector('.darkMode')



const sounds = Sounds()
let minutes = minutesDisplay.textContent
let seconds = secondsDisplay.textContent
let timeTimer
let timer = Timer(minutes,
  minutesDisplay,
  seconds,
  secondsDisplay,
  timeTimer)


  ligthModeButton.addEventListener('click', function() {
    ligthModeButton.classList.add('hide')
    darkModeButton.classList.remove('hide')
    document.body.classList.add('dark')
  })
  
  darkModeButton.addEventListener('click', function() {
    darkModeButton.classList.add('hide')
    ligthModeButton.classList.remove('hide')
    document.body.classList.remove('dark')
  })


playButton.addEventListener('click', function () {
  timer.contDown()

})

pauseButton.addEventListener('click', function () {
  timer.stopcont()
})

moreButton.addEventListener('click', function () {
  timer.moreMinutes()
})

lessButton.addEventListener('click', function () {
  timer.lessMinutes()
})

forestButton.addEventListener('click', function () {
  sounds.ForestAudio()
  forestButton.classList.add('hide')
  foresttButton.classList.remove('hide')

})
foresttButton.addEventListener('click', function () {
  forestButton.classList.remove('hide')
  foresttButton.classList.add('hide')
  sounds.ForesttAudio()
  forestvolume.value = String(0.5)
})


rainButton.addEventListener('click', function () {
  rainButton.classList.add('hide')
  rainnButton.classList.remove('hide')
  sounds.RainAudio()
})
rainnButton.addEventListener('click', function () {
  rainnButton.classList.add('hide')
  rainButton.classList.remove('hide')
  sounds.RainnAudio()
  rainvolume.value = String(0.5)
})

coffeButton.addEventListener('click', function () {
  coffeButton.classList.add('hide')
  coffeeButton.classList.remove('hide')
  sounds.CoffeAudio()
})
coffeeButton.addEventListener('click', function () {
  coffeeButton.classList.add('hide')
  coffeButton.classList.remove('hide')
  sounds.CoffeeAudio()
  coffevolume.value = String(0.5)
})


fireplaceButton.addEventListener('click', function () {
  fireplaceButton.classList.add('hide')
  fireplaceeButton.classList.remove('hide')
  sounds.FireplaceAudio()
})
fireplaceeButton.addEventListener('click', function () {
  fireplaceeButton.classList.add('hide')
  fireplaceButton.classList.remove('hide')
  sounds.FireplaceeAudio()
  fireplacevolume.value = String(0.5)
})

forestvolume.addEventListener('change', function() {
  sounds.forest.volume = this.value
})

rainvolume.addEventListener('change', function() {
  sounds.rain.volume = this.value
})

coffevolume.addEventListener('change', function() {
  sounds.coffe.volume = this.value
})

fireplacevolume.addEventListener('change', function() {
  sounds.fireplace.volume = this.value
})













