// --------------------------------------------
// --------------------------------------------
// Implementing the Shape function constructor|
// --------------------------------------------
// --------------------------------------------

function Shape(w, h) {
  if (this.__proto__.constructor === Shape) {
    throw "ERROR: Can't make an instance from the 'Shape' function constructor!";
  }
  this.width = w;
  this.height = h;
}

Shape.prototype.area = function () {
  return this.width * this.height;
};

Shape.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
};

// ------------------------------------------------
// ------------------------------------------------
// Implementing the Rectangle function constructor|
// ------------------------------------------------
// ------------------------------------------------
function Rectangle(w, h) {
  if (typeof Rectangle.rectCounter === "undefined") {
    Rectangle.rectCounter = 0;
  }
  Rectangle.rectCounter++;
  if (Rectangle.rectCounter > 1) {
    throw "ERROR: Can't create more than one instance of the 'Rectangle' function constructor!";
  }
  Shape.call(this, w, h);
}

// Linking prototype
Rectangle.prototype = Object.create(Shape.prototype);
// changing the constructor
Rectangle.prototype.constructor = Rectangle;
// adding method to the prototype
Rectangle.prototype.toString = function () {
  document.write(
    "<h1>Rectangle</h1>" +
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

// ---------------------------------------------
// ---------------------------------------------
// Implementing the Square function constructor|
// ---------------------------------------------
// ---------------------------------------------
function Square(s) {
  if (typeof Square.sqCounter === "undefined") {
    Square.sqCounter = 0;
  }
  Square.sqCounter++;
  if (Square.sqCounter > 1) {
    throw "ERROR: Can't create more than one instance of the 'Square' function constructor!";
  }
  this.side = s;
}

// Linking the prototype
Square.prototype = Object.create(Rectangle.prototype);
// Changing the constructor
Square.prototype.constructor = Square;
// adding methods to the Square constructor
Square.prototype.area = function () {
  return Math.pow(this.side, 2);
};

Square.prototype.perimeter = function () {
  return this.side * 4;
};

Square.prototype.toString = function () {
  document.write(
    "<h1>Square</h1>" +
      "<b>Side:</b> " +
      this.side +
      "<br />" +
      "<b>Area:</b> " +
      this.area() +
      "<br />" +
      "<b>Perimeter:</b> " +
      this.perimeter() +
      "<br />"
  );
};

// Instantiation
// const sh1 = new Shape(3, 4);

const rect1 = new Rectangle(4, 3);
// const rect2 = new Rectangle(1, 9);

const sq1 = new Square(5);
// const sq2 = new Square(15);
