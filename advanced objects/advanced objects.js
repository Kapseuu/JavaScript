//The this Keyword
const robot = {
    model: "1E78V2",
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    },
  };
  
  console.log(robot.provideInfo());



//Arrow Functions and this
const robotfunction = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robotfunction.checkEnergy();



//Privacy
const robotPrivacy = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

console.log(robotPrivacy._energyLevel);

robotPrivacy._energyLevel = "high";
console.log(robotPrivacy._energyLevel);

robotPrivacy.recharge();



//Getters
const robotGet = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel;
    }else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robotGet.energyLevel);



//Setters
const robotSet = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.';
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }   
  } 
};

robotSet.numOfSensors = 100;
console.log(robotSet.numOfSensors);