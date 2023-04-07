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
          Object.defineProperty(this, key, {
            get: function () {
              return tempValue;
            },
            set: function (value) {
              tempValue = value;
            },
          });
        })();
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
