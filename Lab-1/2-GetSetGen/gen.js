function Generator() {
  this.description = "initial description";
  this.title = "initial title";

  this.getSetGen = function () {
    for (var key in this) {
      if (typeof this[key] === "function") {
        continue;
      } else {
        // used IIFE to create a new scope for each iteration!
        (function () {
          var tempValue = this[key];
          console.log(this);
          Object.defineProperty(this, key, {
            get: function () {
              return tempValue;
            },
            set: function (value) {
              tempValue = value;
            },
          });
        }.bind(this)());
      }
    }
  };
}

var obj = new Generator();

// Object.defineProperty(obj, "getSetGen", {
//   enumerable: false,
// });

obj.getSetGen();

obj.description = "new description!";
obj.title = "new title!";

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
