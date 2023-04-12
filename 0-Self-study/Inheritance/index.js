function Person(fullName, birthYear) {
  this.fullName = fullName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

function Student(fullName, birthYear, course) {
  this.fullName = fullName;
  this.birthYear = birthYear;
  this.course = course;
}

Student.prototype.introduce = function () {
  console.log(`My name is ${this.fullName}, and I study ${this.course}`);
};

const mike = new Student("Mike", 1999, "Computer Science");
