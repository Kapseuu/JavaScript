
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



//Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);



//Functions as Parameters
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results';  
  }
  
  console.log(checkConsistentOutput(addTwo, 10));  



//The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruitsItem => console.log("I want to eat a " + fruitsItem));



//The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));



const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(num => num/100);
console.log(smallNumbers)



//The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbersFilter = randomNumbers.filter(num => num < 250);
console.log(randomNumbers);
console.log(smallNumbersFilter);



const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
console.log(favoriteWords);
console.log(longFavoriteWords);



//