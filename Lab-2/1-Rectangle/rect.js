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

var rectObj = new Rectangle(5, 7);
console.log(rectObj.perimeter());
