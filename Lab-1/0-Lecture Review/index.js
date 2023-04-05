/*
---------------------------
|   DATA DESCRIPTIVE WAY  |
---------------------------
*/

var obj = { age: 25 };

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
  console.log(key);
}

console.log(obj);
