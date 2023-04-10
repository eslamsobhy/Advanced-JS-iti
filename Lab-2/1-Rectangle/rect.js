function Rectangle(w, h) {
  this.width = w;
  this.height = h;
}

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
rectObj.toString();
