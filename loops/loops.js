
//The For Loop
for(let loop = 5; loop <= 10; loop++){ //loop from 5 to 10
    console.log(loop)
}
  
  
  
//Looping in Reverse
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}



//Looping through Arrays
let vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++){
  console.log("I would love to visit " + vacationSpots[i]);
}



//Nested Loops
let bobsFollowers = ["Maya", "Michael", "John", "Julia"];
let tinasFollowers = ["Maya", "Ann", "John"];
let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);



//The while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while(currentCard !== "spade"){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



//Do...While Statements
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do{
  cupsAdded++;
  console.log(cupsAdded);
}while(cupsAdded < cupsOfSugarNeeded);



//The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G."){
    break;
  }
}
console.log("And if you don't know, now you know.")