import Ship from './ship.mjs'; // Import the Ship class

export default class GameBoard {
  constructor() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null)); // Create a 10x10 board
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(length, coordinates) {
    const newShip = new Ship(length);
    for (const coord of coordinates) {
      const [x, y] = coord;
      this.board[x][y] = newShip;
    }
    this.ships.push(newShip);
  }

  receiveAttack(x, y) {
    const target = this.board[x][y];
    if (target) {
      target.hit();
    } else {
      this.missedAttacks.push([x, y]);
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
