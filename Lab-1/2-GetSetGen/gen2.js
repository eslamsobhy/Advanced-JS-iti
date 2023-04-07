var obj = {
  description: "initial description",
  title: "initial title",

  getSetGen: function () {
    // no need for using IIFE, since forEach already accepts a callback function...
    // ...which creates new scope for each iteration
    Object.keys(this).forEach((key) => {
      if (typeof this[key] == "function") {
        return;
      } else {
        var tempValue = this[key];
        Object.defineProperty(this, key, {
          get() {
            return tempValue;
          },
          set(value) {
            tempValue = value;
          },
        });
      }
    });
  },
};

obj.getSetGen();
console.log(obj);

obj.description = "new description";
obj.title = "new title";

console.log(obj.description);
console.log(obj.title);

console.log("========================================");

// Binding
var newObject = {
  name: "initial name",
  age: "initial age",
  initializeValues: function () {
    (this.name = ""), (this.age = "");
  },
};

obj.getSetGen.call(newObject);
console.log(newObject);

newObject.name = "new name";
newObject.age = 25;

console.log(newObject.name);
console.log(newObject.age);
