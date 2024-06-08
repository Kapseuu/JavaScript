// if/else

let sale = true;
if (sale===true){
  console.log('Time to buy!')
} //console will output 'Time to buy!'

if (sale===false){
    console.log('Time to buy!')
  } //console will not output 'Time to buy!'



sale = false;
if(sale) {
  console.log('Time to buy!');
} else{
  console.log('Time to wait for a sale.')
}//console will output 'Time to wait for a sale.'



//Comparison Operators
let hungerLevel = 7;
if (hungerLevel <= 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}



//Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else { 
  console.log('not bed time yet');
}



