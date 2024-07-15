import GameBoard from './gameboard.mjs';
export default function createPlayer(type) {
  const gameBoard = new GameBoard();
  function attack(opponentGameBoard, x, y, boardElement) {
    opponentGameBoard.receiveAttack(x, y, boardElement);
  }
  return {
    type,
    gameBoard,
    attack,
  };
}
