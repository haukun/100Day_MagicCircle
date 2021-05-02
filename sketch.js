function setup() {
  createCanvas(720, 720);
}

function draw() {
  background(0);

  //  Outer Circle
  push();
  stroke(255);
  strokeWeight(6);
  noFill();
  circle(360, 360, 660);
  pop();
}