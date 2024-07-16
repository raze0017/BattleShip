export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
    if (this.isSunk()) {
      console.log(this.length + 'is sunk');
    }
  }

  isSunk() {
    return this.hits === this.length;
  }
}
