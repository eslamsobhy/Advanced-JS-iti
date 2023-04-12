function Car(m, s) {
  this.make = m;
  this.speed = s;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

function EV(m, s, c) {
  Car.call(this, m, s);
  this.charge = c;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} has a ${this.charge}%`);
};
EV.prototype.accelerate = function () {
  this.charge -= 1;
  this.speed += 20;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}%`
  );
};

EV.prototype.constructor = EV;

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 130);

const ev1 = new EV("Tesla", 120, 23);
ev1.accelerate();
ev1.accelerate();
ev1.accelerate();
ev1.brake();
ev1.chargeBattery(90);
ev1.accelerate();
ev1.accelerate();
