import GameBoard from './gameboard.mjs';
export default function createPlayer(type) {
  const gameBoard = new GameBoard();
  function attack(opponentGameBoard, x, y) {
    opponentGameBoard.receiveAttack(x, y);
  }
  return {
    type,
    gameBoard,
    attack,
  };
}
