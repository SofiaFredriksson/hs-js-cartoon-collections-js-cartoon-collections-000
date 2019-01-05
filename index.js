function dwarfRollCall(dwarves) {
  var newArr = []
  for (var i = 0; i < dwarves.length; i++) {
    newArr.push(`${i+1}. ${dwarves[i]} `)
  }
  return newArr.join("")
}

function summonCaptainPlanet(planeteerCalls){
var capPlanet = []
for (var i = 0; i < planeteerCalls.length; i++) {
    capPlanet.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return capPlanet
}

function longPlaneteerCalls(words) {

 for (var i = 0; i < words.length; i++) {
   if (words[i].length > 4) {
     words = true 
   }
   else {
     words = false
   }
 }
 return words
 }
  

function findTheCheese (foods) {
 var cheeses = ["cheddar", "gouds", "camembert"]
   for (var i = 0; i < foods.length; i++) {
     for (var j = 0; j < cheeses.length; j++) {
       if (foods[i] === cheeses[j]){
         return cheeses[j]
       }
     }
   }
   return "no cheese!"
   }
     
  
  