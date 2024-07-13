// gameboard.mjs

import Ship from './ship.mjs'; // Import the Ship class
import createGrid from './ui.mjs';
export default class GameBoard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.missedAttacks = [];
    this.ships = [];
  }
  placeShip(length, coordinates) {
    const newShip = new Ship(length);
    for (const coord of coordinates) {
      const [x, y] = coord;
      this.board[x][y] = newShip; // Place the ship on the board
    }
    this.ships.push(newShip); // Keep track of all ships
  }

  receiveAttack(x, y) {
    const target = this.board[x][y];
    if (target) {
      target.hit(); // Increment hits if a ship is hit
    } else {
      this.missedAttacks.push([x, y]); // Track missed attacks
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk()); // Check if all ships are sunk
  }
}
