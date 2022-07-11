
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color : 'silver'
  }

//   With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
/*******************Another Example*********************/

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  spaceship.numCrew;
  
  let crewCount = spaceship.numCrew;
  
  let planetArray = spaceship.flightPath[2];
  console.log(planetArray)
/*******************Another Example*********************/

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  spaceship['Active Misson']
  
  let isActive = spaceship['Active Mission']
  
  console.log(isActive)

  /*******************Another Example*********************/


  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };

  spaceship.color = 'glorious gold';
  
  spaceship.numEngines = 5;
  
  delete spaceship['Secret Mission']