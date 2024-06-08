// if/else

let sale = true;
if (sale===true){
  console.log("Time to buy!")
} //console will output "Time to buy!"

if (sale===false){
    console.log("Time to buy!")
  } //console will not output "Time to buy!"



sale = false;
if(sale) {
  console.log("Time to buy!");
} else{
  console.log("Time to wait for a sale.")
}//console will output "Time to wait for a sale."



//Comparison Operators
let hungerLevel = 7;
if (hungerLevel <= 7){
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}



//Logical Operators
let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8){
  console.log("time to sleep");
} else { 
  console.log("not bed time yet");
}



//Truthy and Falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}


let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}

let tool = "";
tool = "marker";
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);



//Ternary Operator 
let isLocked = false;
isLocked ? console.log("You will need a key to open the door.") : console.log("You will not need a key to open the door.");


let isCorrect = true;
isCorrect ? console.log("Correct!") : console.log("Incorrect!");


let TernaryPhrase = "Love That!";
TernaryPhrase === "Love That!" ? console.log("I love that!") : console.log("I don't love that!");



//else if 
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}



//The switch keyword
let athleteFinalPosition = "first place";

switch(athleteFinalPosition){
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}



// Task (eight ball)
let userName = "Kacper";
userName ? console.log(`Hello, ${userName}!`): console.log("Hello!");

let userQuestion = "How lucky am I?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;

switch(randomNumber){
  case 0:
    console.log("Outlook not so good");
    break;
  case 1:
    console.log("My sources say no");
    break;
  case 2:
    console.log("Do not count on it");
    break;
  case 3:
    console.log("Cannot predict now");
    break;
  case 4:
    console.log("Reply hazy try again");
    break;
  case 5:
    console.log("Signs point to yes");
    break;
  case 6:
    console.log("It is decidedly so");
    break;
  case 7:
    console.log("It is certain");
    break;
}



//Task (Race day)
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;

if(runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
  console.log(`${raceNumber} You will race at 9:30am`);
} else if(runnerAge > 18 && !registeredEarly){
  console.log(`${raceNumber} You will race at 11:00am`);
} else if(runnerAge < 18){
  console.log(`${raceNumber} You will race at 12.30pm`);
} else {
  console.log("Go to see the registration desk");
}