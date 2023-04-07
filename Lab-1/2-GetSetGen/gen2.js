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

obj.description = "hamada";
obj.title = 25;

console.log(obj.description);
console.log(obj.title);
