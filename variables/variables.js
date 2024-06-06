//Var
var favoriteFood = 'pizza';
var numOfSlices = 8

console.log(favoriteFood);
console.log(numOfSlices)



//Let
let changeMe = true;
changeMe = false;

console.log(changeMe);



//Const
const entree = 'Enchiladas';
// entree='Tacos;' <-- would not work
console.log(entree);



//Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);



//The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar --;

console.log(gainedDollar);
console.log(lostDollar);



//String Concatenation with Variables
let favoriteAnimal = 'wolf';

console.log('My favorite animal: ' + favoriteAnimal);



//String Interpolation
let myName = 'Kacper';
let myCity = 'Bytom';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);



//typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

newVariable = 1;
console.log(typeof newVariable);

newVariable = true;
console.log(typeof newVariable);



//Task (Kelvin Weather)
let kelvin = 293;
let celsius = kelvin - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log('Kelvin: ' + kelvin);
console.log('Celsius: ' + celsius);
console.log('Fahrenheit: ' + fahrenheit);



//Task (Dog Years)
let myAge = 18;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
let myNameDogTask = 'Kacper'.toLowerCase();

console.log(`My name is ${myNameDogTask}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);
