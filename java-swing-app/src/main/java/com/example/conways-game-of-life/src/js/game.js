// This file contains the logic for Conway's Game of Life. It defines the rules for cell survival, death, and reproduction, and manages the game state.

class GameOfLife {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.createGrid();
    }

    createGrid() {
        return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    }

    setCell(x, y, state) {
        this.grid[x][y] = state;
    }

    getCell(x, y) {
        return this.grid[x] && this.grid[x][y];
    }

    step() {
        const newGrid = this.createGrid();

        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.cols; y++) {
                const alive = this.getCell(x, y) === 1;
                const neighbors = this.countNeighbors(x, y);

                if (alive && (neighbors < 2 || neighbors > 3)) {
                    newGrid[x][y] = 0; // Cell dies
                } else if (!alive && neighbors === 3) {
                    newGrid[x][y] = 1; // Cell becomes alive
                } else {
                    newGrid[x][y] = alive ? 1 : 0; // Cell remains the same
                }
            }
        }

        this.grid = newGrid;
    }

    countNeighbors(x, y) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // Skip the cell itself
                if (this.getCell(x + i, y + j) === 1) count++;
            }
        }
        return count;
    }

    getGrid() {
        return this.grid;
    }
}

export default GameOfLife;