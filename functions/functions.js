//Function Declarations
function getReminder(){
    console.log("Water the plants");
  }
  
  function greetInSpanish(){
    console.log("Buenas tardes.");
  }



//Calling a Function
function sayThanks(){
    console.log("Thank you for your purchase! We appreciate your business.");
  }
  
  sayThanks();
  sayThanks();
  sayThanks(); //you can call functions as many times as you want them



//Parameters and Arguments
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks("Cole");



//Default Parameters
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
makeShoppingList();



//Return
function monitorCount(rows, columns){
    return rows * columns;
  }
  
let numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);



//Helper Functions