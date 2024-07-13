import './css/styles.css';
import './css/addtional.css';
import './css/iconstyles.css';
import createPlayer from './scripts/player.mjs';
import { createGrid, addCellListeners } from './scripts/ui.mjs';
document.addEventListener('DOMContentLoaded', function () {
  const player1BoardElement = document.querySelector('.player1');
  const player2BoardElement = document.querySelector('.player2');
  const player1 = createPlayer('human');
  const player2 = createPlayer('computer');
  createGrid(player1BoardElement);
  addCellListeners(player1BoardElement, player1.gameBoard);

  createGrid(player2BoardElement);
  addCellListeners(player2BoardElement, player2.gameBoard);

  player1.attack(player2.gameBoard, 0, 0);
  player1.attack(player2.gameBoard, 0, 1);
  player1.attack(player2.gameBoard, 0, 2);

  console.log('hello');
  console.log(player2.gameBoard.allShipsSunk()); // Should be true after 3 hits
});
