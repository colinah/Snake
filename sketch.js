let snake = new Snake()
let direction = {x:1,y:0}
function setup() {
  
  createCanvas(400,400)
  frameRate(10);
  console.log(snake)
}

function draw() {
  // put drawing code here
  background(220)
  snake.draw(direction)

}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    direction = 'left'
  } else if(keyCode === RIGHT_ARROW) {
    direction = 'right'
  } else if(keyCode === UP_ARROW) {
    direction = 'up'
  } else if(keyCode === DOWN_ARROW) {
    direction = 'down'
  }
}