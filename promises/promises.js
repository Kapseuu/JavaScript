//in bash => node app.js (we have promises.js)
//Constructing a Promise Object
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0){
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  }
  
  const orderSunglasses = () => {
    return new Promise(myExecutor);
  }
  
  let orderPromise = orderSunglasses();
  
  console.log(orderPromise);



//The Node setTimeout() Function
console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log('esz');
}
setTimeout(usingSTO, 3000);
console.log("This is the last line of code in app.js.");



//Success and Failure Callback Functions
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectionReason) => { 
  console.log(rejectionReason);
}

checkInventory(order)
  .then(handleSuccess, handleFailure);



//Using catch() with Promises
const {checkInventory} = require('./library.js');

const orderCatch = [['sunglasses', 1], ['bags', 2]];

const handleSuccessCatch = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailureCatch = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(orderCatch)
	.then(handleSuccessCatch)
	.catch(handleFailureCatch);



//Chaining Multiple Promises
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const orderMultiple = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(orderMultiple)
.then((resolvedValueArray) => {
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});