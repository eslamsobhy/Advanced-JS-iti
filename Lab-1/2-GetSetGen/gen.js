var dummyDescription = "initial description";

function Generator() {
  this.description = "";
  this.getSetGen = function () {
    for (var key in this) {
      if (typeof this[key] === "function") {
        continue;
      } else {
        Object.defineProperty(this, key, {
          get: function () {
            return dummyDescription;
          },
          set: function (value) {
            dummyDescription = value;
          },
          configurable: false,
          enumerable: false,
        });
      }
    }
  };
}

var obj = new Generator();

// Object.defineProperty(obj, "getSetGen", {
//   enumerable: false,
// });

obj.getSetGen();
console.log(obj);

obj.description = "hello";

console.log(obj.description);
