function setup() {
  createCanvas(720, 720);
}

function draw() {
  randomSeed(42);
  background(0);

  //  Outer Circle : Border
  push();
  stroke(255);
  strokeWeight(6);
  noFill();
  circle(360, 360, 660);
  pop();

  //  Outer Circle : District border
  push();
  stroke(255);
  strokeWeight(1);
  noFill();
  circle(360, 360, 647);
  circle(360, 360, 593);
  circle(360, 360, 585);
  pop();

  //  Outer Circle : BezierGlyph
  push();
  stroke(255);
  noFill();
  for (angle = 0; angle < TAU; angle += PI / 64) {
    push();
    var baseX = cos(angle) * 310 + 360;
    var baseY = sin(angle) * 310 + 360;
    translate(baseX, baseY);
    rotate(angle);

    for (i = 0; i < 3; i++) {
      var randomAngle = int(random(6)) * PI / 3;
      var endX = cos(randomAngle) * 10;
      var endY = sin(randomAngle) * 5;
      var bezierAngle1 = int(random(6)) * PI / 3;
      var controlX1 = cos(bezierAngle1) * 10;
      var controlY1 = sin(bezierAngle1) * 5;
      var bezierAngle2 = int(random(6)) * PI / 3;
      var controlX2 = cos(bezierAngle2) * 10;
      var controlY2 = sin(bezierAngle2) * 5;
      bezier(0, 0, controlX1, controlY1, controlX2, controlY2, endX, endY);
    }

    pop();
  }
  pop();
}