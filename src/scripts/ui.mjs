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
export function addCellListeners(boardElement, gameBoard) {
  boardElement.addEventListener('click', (event) => {
    const cell = event.target.closest('.gridcell');
    if (!cell) return; // Exit if no grid cell is clicked

    const x = parseInt(cell.dataset.x, 10);
    const y = parseInt(cell.dataset.y, 10);
    console.log(x, y);
    if (!isNaN(x) && !isNaN(y)) {
      gameBoard.receiveAttack(x, y);
    } else {
      console.error('Invalid coordinates:', x, y);
    }
  });
}
