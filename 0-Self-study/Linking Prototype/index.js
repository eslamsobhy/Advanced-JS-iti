const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const person1 = Object.create(PersonProto);
// console.log(person1.__proto__ === PersonProto);
person1.fullName = "Eslam";
person1.birthYear = 1999;

person1.calcAge(); // from the prototype we just linked

const person2 = Object.create(PersonProto);
person2.init("Sarah", 1992);
person2.calcAge();
