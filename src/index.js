import './css/styles.css';
import './css/addtional.css';
import './css/iconstyles.css';
import GameBoard from './scripts/gameboard.mjs';
const myGameBoard = new GameBoard();
myGameBoard.placeShip(3, [
  [0, 0],
  [0, 1],
  [0, 2],
]);

console.log(myGameBoard.board);
myGameBoard.receiveAttack(0, 0);
myGameBoard.receiveAttack(0, 1);
myGameBoard.receiveAttack(0, 2);

console.log('hello');
console.log('hello' + myGameBoard.allShipsSunk()); // Should be true after 3 hits
