function dwarfRollCall(dwarves) {
  const newArr = []
  for (let i = 0; i < dwarves.length; i++) {
    newArr.push(`${i+1}. ${dwarves[i]} `)
  }
  return newArr.join("")
}

function summonCaptainPlanet(planeteerCalls){
const capPlanet = []
for (let i = 0; i < planeteerCalls.length; i++) {
    capPlanet.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return capPlanet
}

function longPlaneteerCalls(words) {

 for (let i = 0; i < words.length; i++) {
   if (words[i].length > 4) {
     return true
   }
   else {
     return false
   }
 }
}


function findTheCheese (foods) {
 const cheeses = ["cheddar", "gouda", "camembert"]
   for (let i = 0; i < foods.length; i++) {
     for (let j = 0; j < cheeses.length; j++) {
       if (foods[i] === cheeses[j]){
         return cheeses[j]
       }
     }
   }
   return "no cheese!"
   }
     
  
  