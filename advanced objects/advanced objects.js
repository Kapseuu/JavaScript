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



//Factory Functions
const robotFactory = (model, mobile) => {
  return{
    //model: model,
    model,
    //mobile: mobile,
    mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();



//Destructured Assignment
const robotDestructuredAssignment = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robotDestructuredAssignment;

functionality.beep();



//Built-in Object Methods
const robotBuiltIn = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robotBuiltIn);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robotBuiltIn);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robotBuiltIn)

console.log(newRobot);