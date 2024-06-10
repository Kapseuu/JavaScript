//Create an array
const hobbies = ["test", "test1" , "test2"];
console.log(hobbies);



//Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);



//Update Elements 
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = "avocados";
console.log(groceryList);



//Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = "Mayo";
console.log(condiments);

condiments = ["Mayo"];
console.log(condiments);

utensils[3] = "Spoon";
console.log(utensils);



//The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);



//The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
console.log(chores);

chores.push("make the bed", "wash the dishes");
console.log(chores);

//The .pop() Method
chores.pop();
console.log(chores);



//More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);