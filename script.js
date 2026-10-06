const canvas = document.getElementById('gameCanvas');
console.log("Canvas width:", canvas.width);

// Get the drawing tool of the canvas
const ctx = canvas.getContext('2d');
const keys = {};

const ball = {
  x: 400,
  y: 250,
  radius: 8,
  speedX: 1, // pixels per frame in the x direction
  speedY: 3, // pixels per frame in the y direction
};

const leftPaddle = {
  x: 20,
  y: 200,
  width: 10,
  height: 100,
  speed: 6,
};

const rightPaddle = {
  x: 770,
  y: 200,
  width: 10,
  height: 100,
  speed: 6,
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

    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
        ball.speedY = -ball.speedY; // reverse the y direction if it hits the top or bottom
    }

    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
        ball.speedX = -ball.speedX; // reverse the x direction if it hits the left or right
    }

    if (keys['w']) {
        leftPaddle.y -= leftPaddle.speed; // move the left paddle up
    }

    if (keys['s']) {
        leftPaddle.y += leftPaddle.speed; // move the left paddle down
    }

    if (keys['arrowup']) {
        rightPaddle.y -= rightPaddle.speed; // move the right paddle up
    }

    if (keys['arrowdown']) {
        rightPaddle.y += rightPaddle.speed; // move the right paddle down
    }
}

function gameLoop() {
    update();
    draw(); // call the draw function to render the updated state
    requestAnimationFrame(gameLoop); // call the gameLoop function again for the next frame
}

document.addEventListener('keydown', function(e){
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener('keyup', function(e){
    keys[e.key.toLowerCase()] = false;
});

gameLoop(); // start the game loop