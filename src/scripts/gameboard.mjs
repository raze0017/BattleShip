// gameboard.mjs

import Ship from './ship.mjs'; // Import the Ship class
import createGrid from './ui.mjs';
export default class GameBoard {
  constructor() {
    this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
    this.missedAttacks = [];
    this.ships = [];
  }
  placeShip(length, coordinates, boardElement, enemy) {
    const newShip = new Ship(length);
    for (const coord of coordinates) {
      const [x, y] = coord;
      this.board[x][y] = newShip; // Place the ship on the board
      const toColor = boardElement.querySelector(`.cell-${x}-${y}`);
      if (!enemy) {
        toColor.style.background = 'blue';
      }
    }
    this.ships.push(newShip); // Keep track of all ships
  }

  receiveAttack(x, y, boardElement) {
    const target = this.board[x][y];
    const toColor = boardElement.querySelector(`.cell-${x}-${y}`);

    if (target) {
      toColor.style.background = 'red';
      target.hit(); // Increment hits if a ship is hit
    } else {
      toColor.style.background = 'black';

      this.missedAttacks.push([x, y]); // Track missed attacks
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk()); // Check if all ships are sunk
  }
}
