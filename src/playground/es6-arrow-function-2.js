const multiplier = {
  numbers: ["2", "3", "4"],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
    //return product;
  }
};
console.log(multiplier.multiply());
