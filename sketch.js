let snake = new Snake()


function setup() {
  
  createCanvas(400,400)
  
  console.log(snake)
}

function draw() {
  // put drawing code here
  background(220)
  snake.show()

}