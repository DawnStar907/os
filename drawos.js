let cursorSprite, pointerSprite;
getImageHexArray("https://raw.githubusercontent.com/SquareScreamYT/sq-render/main/images/cursor.png").then(hexArray => {
  cursorSprite = blackToTransparent(hexArray)
});
getImageHexArray("https://raw.githubusercontent.com/SquareScreamYT/sq-render/main/images/pointer.png").then(hexArray => {
  pointerSprite = blackToTransparent(hexArray)
});

function draw() {
  clearCanvas();
  if (cursorSprite) { drawSprite(mouseX-1, mouseY, cursorSprite); }

  if (mouseDown) {
    onMouseDown();
  }

  if (mouseDownRight) {
    onMouseDownRight();
  }

  onInitialMouseDown();
}


function onMouseDown() {

}

function onMouseDownRight() {

}

function onMouseUp() {
  
}

function onMouseUpRight() {
  
}

function onMouseClick() {
  
}

function onMouseClickRight() {
  
}

function onScrollUp() {

}

function onScrollDown() {

}

function onKeyPress(key) {
  console.log(`Key pressed: ${key}`);
  // Add your key press handling logic here
}

function onKeyDown(key) {
  console.log(`Key down: ${key}`);
  // Add your key down handling logic here
}

function onKeyUp(key) {
  console.log(`Key up: ${key}`);
  // Add your key up handling logic here
}

const FPS = 60;
const frameDelay = 1000 / FPS;
let lastFrameTime = 0;

function gameLoop(timestamp) {
  if (timestamp - lastFrameTime > frameDelay) {
    draw();
    drawPixelmap();
    tick++;
    lastFrameTime = timestamp;
  }
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
