
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