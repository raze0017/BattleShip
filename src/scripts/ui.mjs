import GameBoard from './gameboard.mjs';

const attackedCoordinates = new Set(); // Initialize HashSet for computer's attacked coordinates
const playerAttackedCoordinates = new Set(); // Initialize HashSet for player's attacked coordinates

export function createGrid(boardElement) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('gridcell');
      gridCell.dataset.x = i;
      gridCell.dataset.y = j;
      gridCell.classList.add(`cell-${i}-${j}`);
      boardElement.appendChild(gridCell);
    }
  }
}

export function addCellListeners(boardElement, player1, player2) {
  boardElement.addEventListener('click', (event) => {
    const cell = event.target.closest('.gridcell');
    if (!cell || window.currentPlayer !== 'player1') return; // Exit if no grid cell is clicked or not player1's turn

    const x = parseInt(cell.dataset.x, 10);
    const y = parseInt(cell.dataset.y, 10);

    if (playerAttackedCoordinates.has(`${x},${y}`)) return; // Prevent attacking the same cell again
    playerAttackedCoordinates.add(`${x},${y}`);

    console.log('Player 1 attack:', x, y); // Debugging log
    player1.attack(player2.gameBoard, x, y, boardElement);
    window.currentPlayer = 'player2';

    if (player2.gameBoard.allShipsSunk()) {
      console.log('End game: Player 1 wins');
      const con = document.querySelector('.con');
      con.innerHTML = `Human Wins`;
      window.currentPlayer = null; // Stop the game
    } else {
      computerTurn(
        player1,
        player1.gameBoard,
        document.querySelector('.player1')
      );
    }
  });
}

let status = false;
let stack = [];

const randomCoordinates = () => {
  let x, y;
  do {
    x = Math.floor(Math.random() * 8);
    y = Math.floor(Math.random() * 8);
  } while (attackedCoordinates.has(`${x},${y}`)); // Check if already attacked

  // Mark the coordinates as attacked
  attackedCoordinates.add(`${x},${y}`);
  return [x, y];
};

function computerTurn(player1, playerGameBoard, playerBoardElement) {
  setTimeout(() => {
    let x, y, newx, newy;
    if (!status || stack.length === 0) {
      [x, y] = randomCoordinates();
    } else {
      [x, y] = stack.pop();
    }

    status = playerGameBoard.receiveAttack(x, y, playerBoardElement);
    attackedCoordinates.add(`${x},${y}`);

    if (status) {
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (let [dx, dy] of directions) {
        newx = x + dx;
        newy = y + dy;
        if (
          newx >= 0 &&
          newx < 8 &&
          newy >= 0 &&
          newy < 8 &&
          !attackedCoordinates.has(`${newx},${newy}`)
        ) {
          stack.push([newx, newy]);
        }
      }
    }

    if (player1.gameBoard.allShipsSunk()) {
      console.log('End game: Computer wins');
      const con = document.querySelector('.con');
      con.textContent = `Computer Wins`;
      window.currentPlayer = null; // Stop the game
    } else {
      window.currentPlayer = 'player1';
    }
  }, 500);
}
