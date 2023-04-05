var rectangle = {
  width: 13,
  height: 6,
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return (this.width + this.height) * 2;
  },
  displayInfo: function () {
    return (
      "<h1>The rectangle info:</h1> <br />" +
      "<b>The width: </b>" +
      this.width +
      "<br />" +
      "<b>The height: </b>" +
      this.height +
      "<br />" +
      "<b>The area of the rectangle: </b>" +
      this.area() +
      "<br />" +
      "<b>The perimeter of the rectangle: </b>" +
      this.perimeter()
    );
  },
};

document.getElementById("info").innerHTML = rectangle.displayInfo();
