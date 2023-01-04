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

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
    this.type = "Circle";
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  describe() {
    console.log(`A round and awesome ${this.color} ${this.type}`);
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
const circle = new Circle("green", 3);
console.log(square.area());
console.log(rectangle.area());
console.log(circle.area());
for (const shape of [square, rectangle, circle])
  shape.describe();