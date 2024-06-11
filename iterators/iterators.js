//The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruitsItem => {
    console.log("I want to eat a " + fruitsItem);
});



//The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
    return animal[0];
});

console.log(secretMessage.join(''));



const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(num => {
    return num/100;
});

console.log(smallNumbers)



//The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbersFilter = randomNumbers.filter(num => {
    return num < 250
});

console.log(randomNumbers);
console.log(smallNumbersFilter);



const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
     return word.length > 7;
});

console.log(favoriteWords);
console.log(longFavoriteWords);



//The .findIndex() Method
const animalsFindIndex = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalsFindIndex.findIndex(animal => {
  return animal === 'elephant';
});

console.log(animalsFindIndex[foundAnimal]);
console.log(foundAnimal);



const startsWithS = animalsFindIndex.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(animalsFindIndex[startsWithS]);
console.log(startsWithS);