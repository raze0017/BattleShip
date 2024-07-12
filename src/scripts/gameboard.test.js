import GameBoard from './gameboard.mjs';
import Ship from './ship.mjs';

test('places a ship on the board', () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3);

  gameBoard.placeShip(3, [
    [0, 0],
    [0, 1],
    [0, 2],
  ]);

  // Expect the first cell to be the same instance of ship
  expect(gameBoard.board[0][0]).toStrictEqual(ship);
  expect(gameBoard.board[0][1]).toStrictEqual(ship);
  expect(gameBoard.board[0][2]).toStrictEqual(ship);
});

test('receiveAttack correctly registers hits', () => {
  const gameBoard = new GameBoard();
  // Place the same ship instance
  gameBoard.placeShip(3, [
    [0, 0],
    [0, 1],
    [0, 2],
  ]);

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
