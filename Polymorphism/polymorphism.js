class Car {
  drive() {
    console.log("Driving a generic car");
  }
}

class Sedan extends Car {
  drive() {
    console.log("Driving a comfortable sedan ");
  }
}

class SUV extends Car {
  drive() {
    console.log("Driving a powerful SUV ");
  }
}

const genericCar = new Car();
const sedanCar = new Sedan();
const suvCar = new SUV();

genericCar.drive(); 
sedanCar.drive();   
suvCar.drive();     
