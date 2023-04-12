function Car(m, s) {
  this.make = m;
  this.speed = s;
}

Car.prototype.accelerate = function () {
  if (isNaN(this.speed)) {
    throw "ERROR: the speed should be a number!";
  }
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  if (isNaN(this.speed)) {
    throw "ERROR: the speed should be a number!";
  }
  this.speed -= 5;
  console.log(this.speed);
};

// adding static method
Car.foo = function () {
  console.log("foooooo!");
  console.log(this); // The entire constructor
};

var car1 = new Car("BMW", 120);
var car2 = new Car("Mercedes", 100);

console.log(car1);
console.log(car2);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();

// testing the static method
// car1.foo(); // ERROR: foo is not a function, this method is not in the prototype of the object
Car.foo(); // Now it works!
