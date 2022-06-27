export default function (){
const forest =new Audio ("./musica/Floresta.wav") 
const rain =new Audio ("./musica/Chuva.wav" )
const coffe =new Audio ("./musica/Cafeteria.wav")
const fireplace = new Audio ("./musica/Lareira.wav")

forest.loop = true
rain.loop = true
coffe.loop = true
fireplace.loop = true


function ForestAudio(){
  forest.play()
  
}

function CoffeAudio(){
  coffe.play()

}
function FireplaceAudio(){
  fireplace.play()

}
function RainAudio(){
  rain.play()
}

function ForesttAudio(){
  forest.pause()
}

function CoffeeAudio(){
  coffe.pause()
}
function FireplaceeAudio(){
  fireplace.pause()
}
function RainnAudio(){
  rain.pause()
}



return{
  ForestAudio,CoffeAudio,FireplaceAudio,RainAudio,
  ForesttAudio,CoffeeAudio,FireplaceeAudio,RainnAudio,
  forest,
rain,
coffe,
fireplace,
}
}







