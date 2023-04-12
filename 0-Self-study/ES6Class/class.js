class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // this method will be automatically added to the prototpe
  calcAge() {
    return 2023 - this.birthYear;
  }

  // setters and getters
  get age() {
    return 2023 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert("You didn't provide a full name!");
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const person1 = new Person("Ahmed Sobhy", 1995);
const person2 = new Person("Eslam Sobhy", 1999);

// console.log(person1.calcAge());
// console.log(person1.age);
console.log(person1.fullName);
console.log(person1);
