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
  createGrid(player2BoardElement);
  addCellListeners(player2BoardElement, player1, player2); // Attach listeners to player 2's board only

  // Example ship placement
  player1.gameBoard.placeShip(
    3,
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    player1BoardElement,
    false
  );
  player2.gameBoard.placeShip(
    3,
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    player2BoardElement,
    true
  );

  window.currentPlayer = 'player1'; // Define currentPlayer globally
  console.log('Game initialized');
});
