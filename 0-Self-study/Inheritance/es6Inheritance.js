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

  // static method
  static hey() {
    console.log("Hey there!");
    console.log(this); // The entire class
  }
}

class Student extends Person {
  // If there are no new properties: 'course', we won't need a constructor here
  constructor(fullName, birthYear, course) {
    // Always needs to be called first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}, and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2023 - this.birthYear} years old!`);
  }
}

// const per1 = new Person("Eslam Sobhii", 1999);

const stu1 = new Student("Eslam Sobhii", 1999, "Computer Science");
stu1.introduce();
stu1.calcAge();
