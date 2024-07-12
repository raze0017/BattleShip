import Ship from './ship.mjs';

test('creates a ship', () => {
  const newShip = new Ship(3);
  expect(newShip.length).toBe(3);
});
test('sinks', () => {
  const newShip = new Ship(3);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});
