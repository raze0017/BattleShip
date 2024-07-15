import Ship from './ship.mjs'; // Import the Ship class

export default class GameBoard {
  constructor() {
    this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(length, coordinates, boardElement, enemy) {
    const newShip = new Ship(length);
    console.log('Place ship on board:', boardElement); // Debugging log
    for (const coord of coordinates) {
      const [x, y] = coord;
      this.board[x][y] = newShip; // Place the ship on the board
      const toColor = boardElement.querySelector(`.cell-${x}-${y}`);
      if (toColor && !enemy) {
        toColor.style.background = 'blue';
      }
    }
    this.ships.push(newShip); // Keep track of all ships
  }

  receiveAttack(x, y, boardElement) {
    const target = this.board[x][y];
    console.log('Receive attack on board:', boardElement); // Debugging log
    const toColor = boardElement.querySelector(`.cell-${x}-${y}`);

    if (toColor) {
      if (target) {
        toColor.style.background = 'red';
        target.hit(); // Increment hits if a ship is hit
      } else {
        toColor.style.background = 'black';
        this.missedAttacks.push([x, y]); // Track missed attacks
      }
    } else {
      console.error('Error: Cell element not found', x, y);
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk()); // Check if all ships are sunk
  }
}
