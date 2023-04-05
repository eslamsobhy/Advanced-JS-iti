/*
---------------------------
|   DATA DESCRIPTIVE WAY  |
---------------------------
*/

var obj = { age: 25, bonus: 200 };

Object.defineProperty(obj, "name", {
  value: "Eslam", // the value of the key (i.e. "name")
  writable: true, // could be muted? (true, false) [default: false]
  configurable: false, // could be deleted? (true, false) [default: false]
  enumerable: false, // could be looped over (appear as a key of the keys when looping over the keys) (true, flase)
});

obj.name = "Ahmed"; // applied since set to true
delete obj.name; // not applied since set to false
for (key in obj) {
  // name not iteratable since set to false
  //   console.log(key);
}

// console.log(obj);

/*
---------------------------
|ACCESSOR DESCRIPTIVE WAY |
---------------------------
*/
(function () {
  var sal = 3000;
  Object.defineProperty(obj, "salary", {
    get: function () {
      return sal + this.bonus; // the value of the salary property
      // return undefined by default
    },
    set: function (value) {
      if (typeof value !== "number") {
        throw "ERROR: Salary must have a numeric value!";
      }
      // this.salary = value; // ERROR: infinite loop!
      sal = value;
    },
    configurable: false,
    enumerable: true,
  });
})();

// console.log(obj.salary); // undefined since get returns undefined by default
// console.log(obj.salary); // getter

// not applied! still the salary has the old value!
obj.salary = 4800; // setter (this calls the set() method)
console.log(obj.salary);
