# Conway's Game of Life

Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway. It is a zero-player game that evolves based on its initial state, requiring no further input. The game consists of a grid of cells that can be either alive or dead, and the state of the cells changes based on a set of rules.

## Project Structure

```
conways-game-of-life
├── src
│   ├── index.html        # Main HTML document
│   ├── css
│   │   └── styles.css    # Styles for the application
│   ├── js
│   │   ├── main.js       # Entry point for the JavaScript application
│   │   ├── game.js       # Game logic for Conway's Game of Life
│   │   └── renderer.js    # Rendering logic for the game grid
│   └── presets
│       ├── glider.json   # Preset configuration for the "Glider" pattern
│       └── pulsar.json    # Preset configuration for the "Pulsar" pattern
├── tests
│   └── game.test.js      # Unit tests for the game logic
├── .gitignore            # Files and directories to ignore by Git
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To run the game locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd conways-game-of-life
   ```

2. **Install dependencies**:
   If you have npm installed, run:
   ```bash
   npm install
   ```

3. **Open the game**:
   Open `src/index.html` in your web browser to start playing.

## Game Rules

The Game of Life is played on a grid where each cell can be in one of two states: alive or dead. The state of the cells changes based on the following rules:

1. Any live cell with fewer than two live neighbors dies (underpopulation).
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies (overpopulation).
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

## Patterns

This project includes preset configurations for two popular patterns:

- **Glider**: A small pattern that moves across the grid.
- **Pulsar**: A larger, oscillating pattern that changes state every few generations.

Feel free to explore and modify the patterns in the `src/presets` directory!

## License

This project is open-source and available under the MIT License.