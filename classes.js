class CoffeeMachine {
    constructor() {
        this._waterAmount = 0;
    }
    static #a = 1;
  
    setWaterAmount(value) {
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    getWaterAmount() {
      return this._waterAmount;
    }

    static big = true;
}

class MiniCoffeeMachine extends CoffeeMachine {
  constructor() {
    super();
  }
}

let big = new CoffeeMachine();
let mini = new MiniCoffeeMachine();
mini.setWaterAmount(900);
let a = Object;
let o = Array;