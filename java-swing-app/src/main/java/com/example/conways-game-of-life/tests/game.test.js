import { createGame, nextGeneration } from '../src/js/game.js';

describe('Conway\'s Game of Life', () => {
    let game;

    beforeEach(() => {
        game = createGame(5, 5); // Create a 5x5 game grid
    });

    test('should initialize with all cells dead', () => {
        expect(game.grid).toEqual([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]);
    });

    test('should apply the rules of the game correctly', () => {
        game.grid[1][2] = 1; // Set a cell to alive
        game.grid[2][2] = 1; // Set a cell to alive
        game.grid[3][2] = 1; // Set a cell to alive

        const nextGen = nextGeneration(game.grid);

        expect(nextGen[2][1]).toBe(1); // Cell should become alive
        expect(nextGen[2][2]).toBe(1); // Cell should remain alive
        expect(nextGen[2][3]).toBe(1); // Cell should become alive
    });

    test('should keep cells alive with two or three neighbors', () => {
        game.grid[1][1] = 1;
        game.grid[1][2] = 1;
        game.grid[1][3] = 1;

        const nextGen = nextGeneration(game.grid);

        expect(nextGen[1][2]).toBe(1); // Cell should remain alive
    });

    test('should kill cells with fewer than two neighbors', () => {
        game.grid[1][1] = 1;
        game.grid[1][2] = 1;

        const nextGen = nextGeneration(game.grid);

        expect(nextGen[1][1]).toBe(0); // Cell should die
    });

    test('should kill cells with more than three neighbors', () => {
        game.grid[1][1] = 1;
        game.grid[1][2] = 1;
        game.grid[1][3] = 1;
        game.grid[2][2] = 1;
        game.grid[2][1] = 1;

        const nextGen = nextGeneration(game.grid);

        expect(nextGen[1][2]).toBe(0); // Cell should die
    });
});