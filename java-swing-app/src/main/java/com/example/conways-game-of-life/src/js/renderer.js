const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function renderGrid(grid, cellSize) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            ctx.fillStyle = grid[y][x] ? '#000' : '#fff';
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

function render(gameState) {
    const cellSize = 10; // Size of each cell in pixels
    renderGrid(gameState.grid, cellSize);
}