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



//Property Assignment
/*let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};*/

spaceship.color = 'glorious gold';
console.log(spaceship.color);
  
spaceship.numEngines = 10;
console.log(spaceship.numEngines);

spaceship['Secret Mission'] = 'Discover life outside of Earth.';
delete spaceship['Secret Mission'];
console.log(spaceship['Secret Mission']);



//Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
alienShip.retreat();
alienShip.takeOff();