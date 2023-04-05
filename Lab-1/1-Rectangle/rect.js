// Anonymous Way

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

// Function Constructor Way

function Rectangle(w, h) {
  this.width = w;
  this.height = h;
  this.area = function () {
    return this.width * this.height;
  };

  this.perimeter = function () {
    return (this.width + this.height) * 2;
  };

  this.displayInfo = function () {
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
  };
}

var rect1 = new Rectangle(2, 3);
var rect2 = new Rectangle(5, 6);

// document.getElementById("info").innerHTML = rect1.displayInfo();
document.getElementById("info").innerHTML = rect2.displayInfo();
