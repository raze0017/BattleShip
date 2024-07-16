# Battleship Game

This project is a web-based implementation of the classic Battleship game. Players can play against an AI, with the goal of sinking all of the opponent's ships.
Live at: https://raze0017.github.io/BattleShip/
## Features

- **Dynamic Grid Creation**: The game board is dynamically generated using JavaScript.
- **Turn-Based Gameplay**: Players take turns to attack each other's grid cells.
- **AI Opponent**: The AI uses a DFS-like approach to strategically attack player ships after a successful hit.
- **Game End Conditions**: The game properly detects and announces when a player or the AI wins.

## Code Overview

### File Structure

- **index.html**: Main HTML file containing the structure of the game.
- **style.css**: CSS file for styling the game.
- **gameboard.mjs**: Manages the game state, including ship placement and attack handling.
- **player.mjs**: Represents a player in the game, including attack logic.
- **ship.mjs**: Represents a ship with properties like size and hit status.
- **ui.mjs**: Handles UI-related functions, such as grid creation and event listeners.

### Key Components

#### Grid Creation

**Function:** `createGrid(boardElement)`

- Creates an 8x8 grid of cells within the specified board element.
- Each cell is assigned a dataset containing its coordinates.

#### Player Interaction

**Function:** `addCellListeners(boardElement, player1, player2)`

- Adds event listeners to grid cells for handling player attacks.
- Prevents players from attacking the same cell multiple times.
- Checks for game end conditions after each attack.

#### AI Logic

**Function:** `computerTurn(player1, playerGameBoard, playerBoardElement)`

- Manages the AI's turn to attack the player's grid.
- Utilizes a DFS-like approach to attack adjacent cells after a successful hit.
- Tracks attacked coordinates to avoid duplicate attacks using a HashSet.

#### Random Coordinate Generation

**Function:** `randomCoordinates()`

- Generates random coordinates for the AI's attack.
- Ensures no duplicate attacks using a HashSet.

### AI Attack Strategy

1. **Initial Attack:** Randomly selects a cell to attack.
2. **Post-Hit Strategy:** If a ship is hit, adjacent cells are targeted in subsequent turns.
3. **Tracking:** Uses a stack to keep track of cells to attack next, ensuring all potential ship locations are targeted efficiently.
