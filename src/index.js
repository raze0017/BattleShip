import './css/styles.css';
import './css/addtional.css';
import './css/iconstyles.css';
import createPlayer from './scripts/player.mjs';
const player1 = createPlayer('Human');
const player2 = createPlayer('Computer');
player2.gameBoard.placeShip(3, [
  [0, 0],
  [0, 1],
  [0, 2],
]);

console.log(player2.gameBoard.board);
player1.attack(player2.gameBoard, 0, 0);
player1.attack(player2.gameBoard, 0, 1);
player1.attack(player2.gameBoard, 0, 2);

console.log('hello');
console.log(player2.gameBoard.allShipsSunk()); // Should be true after 3 hits
