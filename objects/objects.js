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



//Nested Objects
let spaceshipNested = {
    passengers: [{name: "Jacob"}, {name: "Maya"}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceshipNested.crew.captain['favorite foods'][0];
  console.log(capFave);
  
  let firstPassenger = spaceshipNested.passengers[0];
  console.log(firstPassenger);



//Pass By Reference
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};
  

let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
}

greenEnergy(spaceship);
console.log(spaceship);
  
  
let remotelyDisable = obj => {
    obj.disabled = true;
}
  
remotelyDisable(spaceship);
console.log(spaceship);