import createPlayer from './player.mjs';
import GameBoard from './gameboard.mjs';

beforeEach(() => {
  // Clear the DOM and create player board elements before each test
  document.body.innerHTML = `
    <div class="player1"></div>
    <div class="player2"></div>
  `;
});

test('player can attack opponent gameboard', () => {
  const player1 = createPlayer('Human');
  const player2 = createPlayer('Computer');
  const player1BoardElement = document.querySelector('.player1');
  const player2BoardElement = document.querySelector('.player2');

  player2.gameBoard.placeShip(
    3,
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    player2BoardElement,
    1
  );

  player1.attack(player2.gameBoard, 0, 0);
  player1.attack(player2.gameBoard, 0, 1);
  player1.attack(player2.gameBoard, 0, 2);

  expect(player2.gameBoard.allShipsSunk()).toBe(true);
});
