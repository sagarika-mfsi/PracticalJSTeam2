class CoffeeMachine {
  
  // 1. The hidden complexity (Private methods)
  #heatWater() {
    console.log("Heating water to 90 degrees...");
  }

  #grindBeans() {
    console.log("Grinding the coffee beans...");
  }

  // 2. The simple user interface (Public method)
  makeCoffee() {
    this.#heatWater();
    this.#grindBeans();
    console.log("Here is your coffee! ☕");
  }
}

// --- How the user interacts with it ---

const myMachine = new CoffeeMachine();

// The user only has to press one button. They don't need to know how it works.
myMachine.makeCoffee(); 

// If the user tries to mess with the internal mechanics, JavaScript throws an error.
// myMachine.#heatWater(); // SyntaxError: Private field '#heatWater' must be declared in an enclosing class