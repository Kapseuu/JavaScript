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