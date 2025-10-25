// main.js

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    const renderer = new Renderer(game);
    
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const clearButton = document.getElementById('clear');
    
    startButton.addEventListener('click', () => {
        game.start();
        game.loop();
    });
    
    stopButton.addEventListener('click', () => {
        game.stop();
    });
    
    clearButton.addEventListener('click', () => {
        game.clear();
        renderer.render();
    });
    
    renderer.render();
});