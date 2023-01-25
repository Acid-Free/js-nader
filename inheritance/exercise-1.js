class Shape {
  constructor(color = "Transparent") {
    this.color = color;
    this.type = "Shape";
  }
  describe() {
    console.log(`A ${this.color} ${this.type}`);
  }
}

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
    this.type = "Square";
  }
  area() {
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }
  area() {
    return this.width * this.height;
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
console.log(square.area());
console.log(rectangle.area());
for (const shape of [square, rectangle])
  shape.describe();