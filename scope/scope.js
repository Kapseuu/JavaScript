//Blocks and Scope
const city = "New York City";

const logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());



//Global Scope
let satellite = "The Moon";
let galaxy = "The Milky Way";
let stars = "North Star";

let callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}

console.log(callMyNightSky());



//Block Scope
let logVisibleLightWaves = () => {
    const lightWaves = "Moonlight";
    console.log(lightWaves);
  }

//console.log(lightWaves); <-- It will output error
logVisibleLightWaves();




//Scope Pollution

/*const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {*/
  stars="Sirius";
/*	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());*/
console.log(stars);



//Practice Good Scoping
const logVisibleLightWavesPractice = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    if(region === "The Arctic"){
      let lightWaves = "Northern Lights";
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWavesPractice();