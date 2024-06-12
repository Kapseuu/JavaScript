// Creating Object Literals
let fasterShip = {
    "Fuel Type": "Turbo Fuel",
    color: "silver"
  };



//Accessing Properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };

let crewCount = spaceship.numCrew;
console.log(crewCount);
  
let planetArray = spaceship.flightPath;
console.log(planetArray);



//Bracket Notation
let propName =  'Active Mission';
let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);