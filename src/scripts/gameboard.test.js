import GameBoard from './gameboard.mjs';
import Ship from './ship.mjs';

beforeEach(() => {
  // Clear the DOM and create player board elements before each test
  document.body.innerHTML = `
    <div class="player1"></div>
    <div class="player2"></div>
  `;
});

test('places a ship on the board', () => {
  const gameBoard = new GameBoard();
  const player1BoardElement = document.querySelector('.player1');

  gameBoard.placeShip(
    3,
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    player1BoardElement
  );

  // Expect the first cell to contain a Ship instance
  expect(gameBoard.board[0][0]).toBeInstanceOf(Ship);
  expect(gameBoard.board[0][1]).toBeInstanceOf(Ship);
  expect(gameBoard.board[0][2]).toBeInstanceOf(Ship);
});

test('receiveAttack correctly registers hits', () => {
  const gameBoard = new GameBoard();
  const player1BoardElement = document.querySelector('.player1');

  // Place a ship on the board
  gameBoard.placeShip(
    3,
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    player1BoardElement,
    0
  );

  // Attack the ship's locations
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(0, 1);
  gameBoard.receiveAttack(0, 2);

  // Check that the ship is sunk
  expect(gameBoard.ships[0].isSunk()).toBe(true);
});

test('receiveAttack registers misses', () => {
  const gameBoard = new GameBoard();
  gameBoard.receiveAttack(1, 1);
  expect(gameBoard.missedAttacks).toContainEqual([1, 1]);
});
