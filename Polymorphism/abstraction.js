class Vehicle {
  constructor() {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly");
    }
  }

  startEngine() {
    throw new Error("startEngine() must be implemented in subclass");
  }

  stopEngine() {
    throw new Error("stopEngine() must be implemented in subclass");
  }
}

class Bike extends Vehicle {
  startEngine() {
    console.log("Bike engine started ");
  }

  stopEngine() {
    console.log("Bike engine stopped ");
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log("Car engine roars to life ");
  }

  stopEngine() {
    console.log("Car engine shuts down ");
  }
}

const bike = new Bike();
bike.startEngine();
bike.stopEngine();

const car = new Car();
car.startEngine();
car.stopEngine();
