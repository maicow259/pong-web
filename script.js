const canvas = document.getElementById('gameCanvas');
console.log("Canvas width:", canvas.width);

// Get the drawing tool of the canvas
const ctx = canvas.getContext('2d');

const ball = {
  x: 400,
  y: 250,
  radius: 8,
  speedX: 4, // pixels per frame in the x direction
  speedY: 0, // pixels per frame in the y direction
};

const leftPaddle = {
  x: 20,
  y: 200,
  width: 10,
  height: 100,
};

const rightPaddle = {
  x: 770,
  y: 200,
  width: 10,
  height: 100,
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
    ctx.fillStyle = 'white'; // choose the color of the ball and paddles
    ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height); // paint the left paddle
    ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height); // paint the right paddle

    ctx.beginPath(); // start a new path for the ball
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); // draw the ball
    ctx.fill(); // fill it with the color
}

function update() {
    ball.x += ball.speedX; // update the ball's x position
    ball.y += ball.speedY; // update the ball's y position
}

function gameLoop() {
    update();
    draw(); // call the draw function to render the updated state
    requestAnimationFrame(gameLoop); // call the gameLoop function again for the next frame
}

gameLoop(); // start the game loop