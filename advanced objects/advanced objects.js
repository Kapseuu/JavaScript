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