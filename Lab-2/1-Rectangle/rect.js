function Rectangle(w, h) {
  // everytime we create an instance, the counter increases by one!
  if (typeof Rectangle.rectCount === "undefined") {
    Rectangle.rectCount = 0;
  }
  Rectangle.rectCount++;

  this.width = w;
  this.height = h;
}

Rectangle.getRectCount = function () {
  return Rectangle.rectCount;
};

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};

Rectangle.prototype.toString = function () {
  document.write(
    "<b>Width:</b> " +
      this.width +
      "<br />" +
      "<b>Height:</b> " +
      this.height +
      "<br />" +
      "<b>Area:</b> " +
      this.area() +
      "<br />" +
      "<b>Perimeter:</b> " +
      this.perimeter() +
      "<br />"
  );
};

var rectObj = new Rectangle(5, 7);
var rectObj2 = new Rectangle(3, 1);
var rectObj3 = new Rectangle(8, 5);
console.log(Rectangle.getRectCount());
rectObj.toString();
