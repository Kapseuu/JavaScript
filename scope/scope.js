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



//