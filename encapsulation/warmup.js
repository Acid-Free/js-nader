class Printer {
  constructor(brand, colors) {
    this.#setupPrinter(brand, colors);
  }
  #setupPrinter(brand, colors) {
    this.brand = brand;
    this.colors = colors;
  }
}

const printer = new Printer("Samsung", ["black", "white"]);
console.log(printer.brand, printer.colors);