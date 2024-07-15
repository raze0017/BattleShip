import GameBoard from './gameboard.mjs';

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

    if (!isNaN(x) && !isNaN(y)) {
      console.log('Player 1 attack:', x, y); // Debugging log
      player1.attack(player2.gameBoard, x, y, boardElement);
      window.currentPlayer = 'player2';
      if (player2.gameBoard.allShipsSunk() == true) {
        console.log('end game');
      } else {
        computerTurn(
          player1,
          player1.gameBoard,
          document.querySelector('.player1')
        );
      }
    }
  });
}

function computerTurn(player1, playerGameBoard, playerBoardElement) {
  setTimeout(() => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 8);
      y = Math.floor(Math.random() * 8);
    } while (playerGameBoard.board[x][y] !== null);

    console.log('Computer attack:', x, y);
    playerGameBoard.receiveAttack(x, y, playerBoardElement);
    if (player1.gameBoard.allShipsSunk() == true) {
      console.log('end game player 2 wins');
    } else {
      window.currentPlayer = 'player1';
    }
  }, 1000);
}
