function Person(fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

function Student(fullName, birthYear, course) {
  //   Person(fullName, birthYear); // this keyword refers to the window object
  //   change the caller
  Person.call(this, fullName, birthYear);
  this.course = course;
}

// We need to do it exactly here because the next block of code will add to.
// If we do it after adding the introduce() method to the prototype, it will overwrite it!!
Student.prototype = Object.create(Person.prototype); // Deep copy

// We can't do this:
// The two objects are the same, since it is a reference type
// Student.prototype = Person.prototype; // Shallow copy

Student.prototype.introduce = function () {
  console.log(`My name is ${this.fullName}, and I study ${this.course}`);
};

// To change the constructor of the class from Person to Student!
Student.prototype.constructor = Student;

const mike = new Student("Mike", 1999, "Computer Science");
