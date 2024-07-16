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
  const shipSizes = [5, 4, 3, 3, 2]; // Example ship sizes
  let HashSet = new Set();

  for (let size of shipSizes) {
    let validPlacement = false;
    while (!validPlacement) {
      let x = Math.floor(Math.random() * 8);
      let y = Math.floor(Math.random() * 8);
      let horizontal = Math.random() < 0.5; // 50% chance for horizontal
      let temp = [];
      validPlacement = true;

      for (let i = 0; i < size; i++) {
        let newX = horizontal ? x : x + i;
        let newY = horizontal ? y + i : y;

        if (newX >= 8 || newY >= 8 || HashSet.has(`${newX},${newY}`)) {
          validPlacement = false;
          break;
        }
        temp.push([newX, newY]);
      }

      if (validPlacement) {
        for (let coord of temp) {
          HashSet.add(`${coord[0]},${coord[1]}`);
        }
        player1.gameBoard.placeShip(size, temp, player1BoardElement, false);
      }
    }
  }
  let HashSet2 = new Set();
  for (let size of shipSizes) {
    let validPlacement = false;
    while (!validPlacement) {
      let x = Math.floor(Math.random() * 8);
      let y = Math.floor(Math.random() * 8);
      let horizontal = Math.random() < 0.5; // 50% chance for horizontal
      let temp = [];
      validPlacement = true;

      for (let i = 0; i < size; i++) {
        let newX = horizontal ? x : x + i;
        let newY = horizontal ? y + i : y;

        if (newX >= 8 || newY >= 8 || HashSet2.has(`${newX},${newY}`)) {
          validPlacement = false;
          break;
        }
        temp.push([newX, newY]);
      }

      if (validPlacement) {
        for (let coord of temp) {
          HashSet2.add(`${coord[0]},${coord[1]}`);
        }
        player2.gameBoard.placeShip(size, temp, player2BoardElement, true);
      }
    }
  }
  const but = document.querySelector('.but');
  but.addEventListener('click', () => {
    location.reload();
  });
  window.currentPlayer = 'player1'; // Define currentPlayer globally
  console.log('Game initialized');
});
