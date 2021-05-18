function setup() {
  createCanvas(720, 720);
}

function draw() {
  randomSeed(42);
  background(0);

  //  Dual square
  push();
  stroke(255);
  fill(0);
  for (var i = 1; i < 3; i++) {
    var offset = (i * PI) / 4;
    beginShape();
    for (var angle = 0; angle < TAU; angle += PI / 2) {
      var adjustAngle = angle + offset;
      vertex(cos(adjustAngle) * 210 + 360, sin(adjustAngle) * 210 + 360);
    }
    beginContour();
    for (var angle = TAU; angle > 0; angle -= PI / 2) {
      var adjustAngle = angle + offset;
      vertex(cos(adjustAngle) * 195 + 360, sin(adjustAngle) * 195 + 360);
    }
    endContour();
    endShape();
  }
  pop();

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
      var randomAngle = (int(random(6)) * PI) / 3;
      var endX = cos(randomAngle) * 10;
      var endY = sin(randomAngle) * 5;
      var bezierAngle1 = (int(random(6)) * PI) / 3;
      var controlX1 = cos(bezierAngle1) * 10;
      var controlY1 = sin(bezierAngle1) * 5;
      var bezierAngle2 = (int(random(6)) * PI) / 3;
      var controlX2 = cos(bezierAngle2) * 10;
      var controlY2 = sin(bezierAngle2) * 5;
      bezier(0, 0, controlX1, controlY1, controlX2, controlY2, endX, endY);
    }

    pop();
  }
  pop();

  //  Elementals gate
  push();
  stroke(255);
  fill(0);
  for (var angle = 0; angle < TAU; angle += PI / 2) {
    strokeWeight(1);
    circle(cos(angle) * 310 + 360, sin(angle) * 310 + 360, 85);
    strokeWeight(3);
    circle(cos(angle) * 310 + 360, sin(angle) * 310 + 360, 75);
    strokeWeight(1);
    circle(cos(angle) * 310 + 360, sin(angle) * 310 + 360, 65);
  }
  pop();

  //  Fire circle
  push();
  fill(0);
  noStroke();
  var baseX = cos((TAU * 1) / 4) * 310 + 360;
  var baseY = sin((TAU * 1) / 4) * 310 + 360;

  circle(baseX, baseY, 65);
  drawingContext.clip();

  noFill();
  stroke(255);
  for (angle = 0; angle < TAU; angle += PI / 4) {
    arc(
      baseX + cos(angle) * 50,
      baseY + sin(angle) * 50,
      40,
      40,
      angle - PI / 4 + PI,
      angle + PI / 4 + PI
    );
    arc(
      baseX + cos(angle) * 45,
      baseY + sin(angle) * 45,
      40,
      40,
      angle - PI / 4 + PI,
      angle + PI / 4 + PI
    );
    arc(
      baseX + cos(angle) * 38,
      baseY + sin(angle) * 38,
      40,
      40,
      angle - PI / 4 + PI,
      angle + PI / 4 + PI
    );
    arc(
      baseX + cos(angle) * 10,
      baseY + sin(angle) * 10,
      15,
      15,
      angle - PI / 2 + PI / 2,
      angle + PI / 2 + PI / 2
    );
  }
  pop();

  //  Water circle
  push();
  fill(0);
  noStroke();
  var baseX = cos((TAU * 2) / 4) * 310 + 360;
  var baseY = sin((TAU * 2) / 4) * 310 + 360;

  circle(baseX, baseY, 65);
  drawingContext.clip();

  noFill();
  stroke(255);
  for (angle = 0; angle < TAU; angle += PI / 4) {
    push();
    translate(baseX + cos(angle) * 30, baseY + sin(angle) * 30);
    rotate(angle);
    ellipse(0, 0, 15, 5);
    pop();
    push();
    translate(
      baseX + cos(angle + PI / 8) * 30,
      baseY + sin(angle + PI / 8) * 30
    );
    rotate(angle + PI / 8 + PI / 2);
    ellipse(0, 0, 12, 4);
    pop();
    push();
    translate(
      baseX + cos(angle + PI / 8) * 20,
      baseY + sin(angle + PI / 8) * 20
    );
    rotate(angle + PI / 8 + PI / 2);
    ellipse(0, 0, 9, 4);
    pop();
    push();
    translate(baseX + cos(angle) * 10, baseY + sin(angle) * 10);
    rotate(angle);
    ellipse(0, 0, 9, 3);
    pop();
  }
  pop();

  //  Wind circle
  push();
  fill(0);
  noStroke();
  var baseX = cos(0) * 310 + 360;
  var baseY = sin(0) * 310 + 360;

  circle(baseX, baseY, 65);
  drawingContext.clip();
  noFill();
  stroke(255);
  for (angle = 0; angle < TAU; angle += PI / 4) {
    bezier(
      baseX + cos(angle) * 40,
      baseY + sin(angle) * 40,
      baseX + cos(angle + PI / 4) * 40,
      baseY + sin(angle + PI / 4) * 40,
      baseX + cos(angle - PI / 8) * 40,
      baseY + sin(angle - PI / 8) * 40,
      baseX + cos(angle) * 20,
      baseY + sin(angle) * 20
    );
    var shiftAngle = angle + PI / 8;
    bezier(
      baseX + cos(shiftAngle) * 30,
      baseY + sin(shiftAngle) * 30,
      baseX + cos(shiftAngle + PI / 4) * 30,
      baseY + sin(shiftAngle + PI / 4) * 30,
      baseX + cos(shiftAngle - PI / 8) * 30,
      baseY + sin(shiftAngle - PI / 8) * 30,
      baseX + cos(shiftAngle) * 10,
      baseY + sin(shiftAngle) * 10
    );
    bezier(
      baseX + cos(angle) * 30,
      baseY + sin(angle) * 30,
      baseX + cos(angle + PI / 4) * 20,
      baseY + sin(angle + PI / 4) * 20,
      baseX + cos(angle - PI / 8) * 20,
      baseY + sin(angle - PI / 8) * 20,
      baseX + cos(angle) * 10,
      baseY + sin(angle) * 10
    );
  }
  pop();
}
