import GameBoard from './gameboard.mjs';
export function createGrid(boardElement) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('gridcell');
      gridCell.dataset.x = i;
      gridCell.dataset.y = j;
      boardElement.appendChild(gridCell);
    }
  }
}
export function addCellListeners(boardElement, gameBoard) {
  boardElement.addEventListener('click', (event) => {
    const cell = event.target;
    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);
    gameBoard.receiveAttack(x, y);
  });
}
