function setup() {
  createCanvas(720, 720);
}

function draw() {
  randomSeed(42);
  background(0);

  //  Regions circle
  push();
  noFill();
  stroke(255);
  for (var angle = 0; angle < TAU; angle += PI / 2) {
    circle(
      cos(angle + PI / 4) * 250 + 360,
      sin(angle + PI / 4) * 250 + 360,
      60
    );
  }

  //  Regions circle - Plant symbol
  push();
  translate(cos(PI + PI / 4) * 250 + 360, sin(PI + PI / 4) * 250 + 360);
  rotate(PI / 4);
  for (var angle = 0; angle < TAU; angle += PI / 2) {
    push();
    rotate(angle);
    curve(0, 90, 0, 0, 25, 0, 25, 30);
    curve(0, -90, 0, 0, 25, 0, 25, -30);
    pop();
  }
  for (var angle = 0; angle < TAU; angle += PI / 2) {
    push();
    rotate(angle + PI / 4);
    curve(0, 60, 0, 0, 20, 0, 20, 20);
    curve(0, -60, 0, 0, 20, 0, 20, -20);
    pop();
  }
  for (var angle = 0; angle < TAU; angle += PI / 2) {
    push();
    rotate(angle);
    curve(0, 60, 0, 0, 15, 0, 15, -30);
    curve(0, -60, 0, 0, 15, 0, 15, 30);
    pop();
  }
  pop();

  //  Regions circle - Insect symbol
  push();
  translate(
    cos((PI / 2) * 3 + PI / 4) * 250 + 360,
    sin((PI / 2) * 3 + PI / 4) * 250 + 360
  );
  rotate(PI / 4);
  for (var a = -1; a < 2; a += 2) {
    for (var b = -1; b < 2; b += 2) {
      line(0, 4 * b, 8 * a, 8 * b);
      line(8 * a, 8 * b, 8 * a, 12 * b);
    }
  }
  line(0, -16, 0, 16);
  line(-9, 0, 9, 0);

  var headAngle = PI / 8;
  var tailAngle = PI - PI / 8;
  arc(0, 0, 50, 50, headAngle, tailAngle);
  arc(0, 0, 40, 40, headAngle, tailAngle);
  arc(
    cos(headAngle) * 22,
    sin(headAngle) * 22,
    5,
    5,
    headAngle - PI,
    headAngle
  );
  arc(
    cos(tailAngle) * 22,
    sin(tailAngle) * 22,
    5,
    5,
    tailAngle,
    tailAngle + PI
  );
  for (var angle = headAngle; angle <= tailAngle; angle += PI / 4) {
    line(cos(angle) * 20, sin(angle) * 20, cos(angle) * 25, sin(angle) * 25);
  }

  headAngle += PI;
  tailAngle += PI;
  arc(0, 0, 45, 45, headAngle, tailAngle);
  for (var angle = headAngle + PI / 8; angle < tailAngle; angle += PI / 8) {
    line(cos(angle) * 21, sin(angle) * 21, cos(angle) * 25, sin(angle) * 25);
  }
  pop();

  //  Regions circle - Animal symbol
  push();
  translate(cos(PI / 4) * 250 + 360, sin(PI / 4) * 250 + 360);
  rotate(-PI / 4);
  curve(0, 40, 10, 5, -10, 5, 0, 40);
  curve(0, -60, 10, 5, -10, 5, 0, -60);
  push();
  translate(cos(PI / 5) * 15, sin(PI / 5) * 15 + 5);
  rotate(PI / 5);
  ellipse(0, 0, 6, 6);
  pop();
  push();
  translate(cos(PI / 2.5) * 15, sin(PI / 2.5) * 15 + 5);
  rotate(PI / 2.5);
  ellipse(0, 0, 8, 6);
  pop();
  push();
  translate(cos(PI - PI / 5) * 15, sin(PI - PI / 5) * 15 + 5);
  rotate(PI - PI / 5);
  ellipse(0, 0, 6, 6);
  pop();
  push();
  translate(cos(PI - PI / 2.5) * 15, sin(PI - PI / 2.5) * 15 + 5);
  rotate(PI - PI / 2.5);
  ellipse(0, 0, 8, 6);
  pop();

  line(0, -5, 0, -28);
  line(0, -10, -5, -23);
  line(0, -10, 5, -23);

  curve(-90, -15, 10, -20, 20, 10, -5, -15);
  curve(80, -15, 10, -20, 20, 10, 0, 25);
  curve(90, -15, -10, -20, -20, 10, 5, -15);
  curve(-80, -15, -10, -20, -20, 10, 0, 25);

  pop();

  //  Regions circle - Humankind symbol
  push();
  translate(cos(PI / 2 + PI / 4) * 250 + 360, sin(PI / 2 + PI / 4) * 250 + 360);
  rotate(PI / 4);
  var rotateOffset = 0;
  for (var distance = 28; distance > 0; distance -= 8) {
    rotateOffset += PI / 8;
    beginShape();
    var jaggedCount = 0;
    var jaggedLength;
    for (var angle = 0; angle < TAU; angle += PI / 32) {
      jaggedCount++;
      if (jaggedCount % 8 > 3) {
        jaggedLength = distance;
      } else {
        jaggedLength = distance - (distance / 8 + 1);
      }
      vertex(
        cos(angle + rotateOffset) * jaggedLength,
        sin(angle + rotateOffset) * jaggedLength
      );
    }
    endShape();
  }

  pop();

  pop();

  //  Regions area
  push();
  noFill();
  stroke(255);
  rectMode(CENTER);

  var sign = 1;
  var angleOffset = 0;
  for (var regionIndex = 0; regionIndex < 8; regionIndex++) {
    push();
    var regionAngle = (regionIndex * PI) / 4;
    var regionBaseAngle = regionAngle + angleOffset;
    translate(360, 360);
    rotate(regionBaseAngle);
    beginShape();

    var regionEdgeElementX = cos(0.04 * sign) * 212;
    var regionEdgeElementY = sin(0.04 * sign) * 212;
    vertex(regionEdgeElementX, regionEdgeElementY);

    var regionArcEndAngle = PI / 5;
    var regionArcAngleOffset = 0.145;
    var regionArcElementX = cos(regionArcAngleOffset * sign) * 287;
    var regionArcElementY = sin(regionArcAngleOffset * sign) * 287;
    for (var arcAngle = 0; arcAngle < regionArcEndAngle; arcAngle += PI / 32) {
      var resultArcAngle = arcAngle + regionArcAngleOffset;
      vertex(
        cos(resultArcAngle * sign) * 287,
        sin(resultArcAngle * sign) * 287
      );
    }

    var regionCrescentEndAngle = PI - 0.2;
    var regionArcSymbolX =
      cos((PI / 4) * sign) * 250 + cos((-0 + PI / 5) * sign) * 37;
    var regionArcSymbolY =
      sin((PI / 4) * sign) * 250 + sin((-0 + PI / 5) * sign) * 37;
    var saveCrescentAngle = 0;
    for (
      crescentAngle = 0;
      crescentAngle < regionCrescentEndAngle;
      crescentAngle += PI / 32
    ) {
      vertex(
        cos((PI / 4) * sign) * 250 + cos((-crescentAngle + PI / 5) * sign) * 37,
        sin((PI / 4) * sign) * 250 + sin((-crescentAngle + PI / 5) * sign) * 37
      );
      saveCrescentAngle = crescentAngle;
    }
    var regionEdgeSymbolX =
      cos((PI / 4) * sign) * 250 +
      cos((-saveCrescentAngle + PI / 5) * sign) * 37;
    var regionEdgeSymbolY =
      cos((PI / 4) * sign) * 250 +
      sin((-saveCrescentAngle + PI / 5) * sign) * 37;

    var regionEdgeCenterX = cos((PI / 8) * sign) * 168;
    var regionEdgeCenterY = sin((PI / 8) * sign) * 168;
    vertex(regionEdgeCenterX, regionEdgeCenterY);
    endShape(CLOSE);

    drawingContext.clip();
    var regionCenterX =
      regionEdgeCenterX + (regionArcElementX - regionEdgeCenterX) / 2;
    var regionCenterY =
      regionEdgeElementY + (regionArcSymbolY - regionEdgeElementY) / 2;

    push();
    switch (regionIndex) {
      case 0: //  Animal region - Wind side
        push();
        for (var angle = 0; angle < PI / 4; angle += 0.02) {
          line(0, 0, cos(angle) * 300, sin(angle) * 300);
        }
        fill(0);
        var rootX = regionArcSymbolX + cos(-PI / 3) * 40;
        var rootY = regionArcSymbolY + sin(-PI / 3) * 40;
        var distX1 = regionArcElementX + cos(PI / 2 + PI / 4) * 10;
        var distY1 = regionArcElementY + sin(PI / 2 + PI / 4) * 10;
        var distX2 = distX1 - 8 * 8;
        var distY2 = distY1 - 8 * 4;
        var distX3 = distX2 - 54;
        var distY3 = distY2 + 54;
        var saveX, saveY;

        for (var i = 0; i < 4; i++) {
          beginShape();
          for (var j = 0; j <= 1; j += 0.5) {
            var tempX = curvePoint(
              rootX - (50 + i * 10),
              rootX,
              distX1 - i * 16,
              distX1 - i * 16 - (50 + i * 20),
              j
            );
            var tempY = curvePoint(
              rootY - (50 + i * 10),
              rootY,
              distY1 - i * 8,
              distY1 - i * 8 - (50 + i * 20),
              j
            );
            vertex(tempX, tempY);
          }
          saveX = tempX;
          saveY = tempY;
          for (var j = 1; j > 0; j -= 0.1) {
            tempX = curvePoint(
              rootX + (50 + i * 10),
              rootX,
              distX1 - i * 16,
              distX1 - i * 16 + (50 + i * 20),
              j
            );
            tempY = curvePoint(
              rootY + (50 + i * 10),
              rootY,
              distY1 - i * 8,
              distY1 - i * 8 + (50 + i * 20),
              j
            );
            vertex(tempX, tempY);
          }
          endShape();
          line(rootX, rootY, saveX, saveY);
        }
        for (var i = 0; i < 5; i++) {
          beginShape();
          for (var j = 0; j <= 1; j += 0.5) {
            var tempX = curvePoint(
              rootX - 90,
              rootX,
              distX2 - i * 12,
              distX2 - i * 12 - 90,
              j
            );
            var tempY = curvePoint(
              rootY,
              rootY,
              distY2 + i * 12,
              distY2 + i * 12,
              j
            );
            vertex(tempX, tempY);
          }
          saveX = tempX;
          saveY = tempY;
          for (var j = 1; j > 0; j -= 0.1) {
            tempX = curvePoint(
              rootX + 90,
              rootX,
              distX2 - i * 12,
              distX2 - i * 12 + 90,
              j
            );
            tempY = curvePoint(
              rootY,
              rootY,
              distY2 + i * 12,
              distY2 + i * 12,
              j
            );
            vertex(tempX, tempY);
          }
          endShape();
          line(rootX, rootY, saveX, saveY);
        }
        for (var i = 1; i < 3; i++) {
          beginShape();
          for (var j = 0; j <= 1; j += 0.5) {
            var tempX = curvePoint(rootX, rootX, distX3, distX3, j);
            var tempY = curvePoint(
              rootY + 50 + i * 20,
              rootY,
              distY3 + i * 16 + i * 8,
              distY3 + i * 16 + 50 + i * 20,
              j
            );
            vertex(tempX, tempY);
          }
          saveX = tempX;
          saveY = tempY;
          for (j = 1; j > 0; j -= 0.1) {
            tempX = curvePoint(rootX, rootX, distX3, distX3, j);
            tempY = curvePoint(
              rootY - (50 + i * 20),
              rootY,
              distY3 + i * 16 + i * 8,
              distY3 + i * 16 - (50 + i * 20),
              j
            );
            vertex(tempX, tempY);
          }
          endShape();
          line(rootX, rootY, saveX, saveY);
        }
        pop();
        break;
      case 1: //  Animal region - Fire side
        for (var distance = 140; distance < 200; distance += 6) {
          circle(regionCenterX - 10, regionCenterY + 10, distance);
        }
        for (var distance = 30; distance < 70; distance += 10) {
          for (var angle = 0; angle < TAU; angle += PI / distance) {
            var startX = regionCenterX + cos(angle) * distance - 10;
            var startY = regionCenterY + sin(angle) * distance + 10;
            var endX = regionCenterX + cos(angle) * (distance + 10) - 10;
            var endY = regionCenterY + sin(angle) * (distance + 10) + 10;
            var angleOffset = angle + distance;
            bezier(
              startX,
              startY,
              startX + (cos(angleOffset) * distance) / 9,
              startY + (sin(angleOffset) * distance) / 9,
              endX + (cos(angleOffset) * distance) / 9,
              endY + (sin(angleOffset) * distance) / 9,
              endX,
              endY
            );
          }
        }
        push();
        translate(regionCenterX - 10, regionCenterY + 10);
        rotate(atan2(regionCenterY + 10, regionCenterX - 10));
        for (angle = 0; angle < TAU; angle += PI / 30) {
          var startX = cos(angle) * 25;
          var startY = sin(angle) * 10;
          var endX = cos(angle) * 30;
          var endY = sin(angle) * 30;
          bezier(
            startX,
            startY,
            startX + cos(angle) * 10,
            startY + sin(angle) * 10,
            endX + cos(angle) * 10,
            endY + sin(angle) * 10,
            endX,
            endY
          );
        }
        pop();
        break;
      case 2: //  Humankind region - Fire side
        rotate(PI / 4);
        var offset = 0;
        for (var y = -180; y < 0; y += 10) {
          offset++;
          var angle = (offset % 2) * PI;
          for (var x = 150 - (offset % 2) * 10; x < 300; x += 20) {
            arc(x, y, 18, 18, angle + 0.6, PI + angle - 0.6);
            arc(x, y, 18, 18, angle + PI + 0.2, angle + PI + PI / 2 - 0.6);
            arc(x, y, 18, 18, angle + PI + PI / 2 + 0.6, angle + TAU - 0.2);
          }
        }
        break;
      case 3: //  Humankind region - Water side
        rotate(-PI / 4);
        var offset1 = 0;
        var offset2 = 0;
        for (var y = 0; y < 180; y += 9) {
          for (var x = 150; x < 300; x += 3) {
            offset1 = ++offset1 % 7;
            line(x, y, x, y + 1);
            if (offset1 % 2 == 1) {
              line(x, y + 7, x, y + 7 - (offset2++ % 3 == 0 ? 4 : 1));
            }
            if (offset1 % 3 == 1) {
              line(x - 2, y + 5, x + 2, y + 5);
            }
          }
        }
        break;
      case 4: //  Plant region - Water side
        //  Ripple
        for (var distance = 330; distance < 580; distance += 10) {
          circle(0, 0, distance);
        }

        //  Floating flower
        fill(0);
        var baseAngle = PI / 8;
        var baseX = cos(baseAngle) * 230;
        var baseY = sin(baseAngle) * 230;
        for (var i = 12; i > 0; i--) {
          push();
          translate(baseX, baseY);
          rotate(PI / 4 + baseAngle + (i * PI) / 4);
          square(0, 0, i * 4, i / 2);
          pop();
        }

        //  Prosperous squares
        for (var angle = 0; angle < TAU; angle += PI / 2) {
          var x = baseX + cos(baseAngle + angle + PI / 4) * 68;
          var y = baseY + sin(baseAngle + angle + PI / 4) * 68;
          for (var i = 6; i > 0; i--) {
            push();
            translate(x, y);
            rotate(baseAngle + angle + PI / 4);
            square(0, 0, i * 8, i);
            pop();
          }
        }

        for (var angle = 0; angle < TAU; angle += PI / 2) {
          var x = baseX + cos(baseAngle + angle) * 48;
          var y = baseY + sin(baseAngle + angle) * 48;
          for (var i = 3; i > 0; i--) {
            push();
            translate(x, y);
            rotate(baseAngle + angle + PI / 4);
            square(0, 0, i * 8, i * 2);
            pop();
          }
        }

        break;
      case 5: //  Plant region - Earth side
        //  Brick
        var offsetAngle = -PI / 128;
        for (var distance = 325; distance < 580; distance += 10) {
          circle(0, 0, distance);
          for (var angle = 0; angle < PI / 4; angle += PI / 32) {
            var lineAngle = -angle + offsetAngle;
            line(
              (cos(lineAngle) * distance) / 2,
              (sin(lineAngle) * distance) / 2,
              cos(lineAngle) * (distance / 2 + 5),
              sin(lineAngle) * (distance / 2 + 5)
            );
          }
          offsetAngle = -offsetAngle;
        }

        //  Blooming flower
        rectMode(CENTER);
        fill(0);
        var centerX = cos(-PI / 8) * 230;
        var centerY = sin(-PI / 8) * 230;
        for (var angle = 0; angle < TAU; angle += PI / 6) {
          push();
          translate(centerX + cos(angle) * 80, centerY + sin(angle) * 80);
          rotate(angle);
          rect(0, 0, 80, 5);
          pop();
        }
        for (var i = 25; i > 0; i--) {
          push();
          translate(centerX, centerY);
          rotate((i * PI) / 3);
          square(0, 0, i * 3);
          pop();
        }
        break;
      case 6: //  Insect region - Earth side
        push();
        var centerX = cos(PI / 8) * 230;
        var centerY = sin(PI / 8) * 230;
        translate(centerX, centerY);

        for (var angle = 0; angle < TAU; angle += PI / 8) {
          line(0, 0, cos(angle) * 100, sin(angle) * 100);

          for (var distance = 10; distance < 110; distance += 10) {
            var nextAngle = angle + PI / 8;
            var curveDistance = distance + distance / 2;
            curve(
              cos(angle) * curveDistance,
              sin(angle) * curveDistance,
              cos(angle) * distance,
              sin(angle) * distance,
              cos(nextAngle) * distance,
              sin(nextAngle) * distance,
              cos(nextAngle) * curveDistance,
              sin(nextAngle) * curveDistance
            );
            for (i = 0; i < 1; i += 0.2) {
              var curveX = curvePoint(
                cos(angle) * curveDistance,
                cos(angle) * distance,
                cos(nextAngle) * distance,
                cos(nextAngle) * curveDistance,
                i
              );
              var curveY = curvePoint(
                sin(angle) * curveDistance,
                sin(angle) * distance,
                sin(nextAngle) * distance,
                sin(nextAngle) * curveDistance,
                i
              );
              var curveAngle = atan2(curveY, curveX);
              line(
                curveX,
                curveY,
                curveX - (cos(curveAngle) * distance) / 15,
                curveY - (sin(curveAngle) * distance) / 15
              );
            }
          }
        }
        pop();
        break;
      case 7: //  Insect region - Wind side
        push();
        fill(0);
        var centerX = cos(-PI / 8) * 230;
        var centerY = sin(-PI / 8) * 230;
        translate(centerX, centerY);
        for (var distance = 140; distance > 0; distance -= 20) {
          for (
            var angle = (distance / 120) * PI;
            angle < (distance / 120) * PI + TAU;
            angle += PI / 4
          ) {
            push();
            rotate(angle);
            bezier(
              10,
              0,
              distance,
              distance / 3,
              distance,
              -distance / 3,
              10,
              0
            );
            bezier(
              10,
              0,
              distance * 0.9,
              distance / 6,
              distance * 0.9,
              -distance / 6,
              10,
              0
            );
            for (var i = 0.2; i < 1; i += 0.2) {
              var bezierX = bezierPoint(
                10,
                distance * 0.9,
                distance * 0.9,
                10,
                i
              );
              var bezierY = bezierPoint(0, distance / 6, -distance / 6, 0, i);
              line(10, 0, bezierX * 0.9, bezierY * 0.9);
            }
            pop();
          }
        }
        pop();
        break;
    }
    pop();

    sign = -sign;
    if (sign == -1) {
      angleOffset = PI / 4;
    } else {
      angleOffset = 0;
    }
    pop();
  }
  pop();

  //  Dual square
  push();
  stroke(255);
  fill(0);
  for (var i = 1; i < 3; i++) {
    push();
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

    translate(360, 360);
    for (
      var directionAngle = 0;
      directionAngle < TAU;
      directionAngle += PI / 2
    ) {
      push();
      rotate(offset + directionAngle);
      var x = cos(angle) * 202;
      var y = sin(angle) * 202;
      for (var j = 0; j < 200; j += 5) {
        for (var k = 0; k < 4; k++) {
          var angle1 = (int(random(8)) * TAU) / 8;
          var angle2 = (int(random(8)) * TAU) / 8;
          line(
            cos(angle1) * 2 + x - j - 3,
            sin(angle1) * 4 + y + j + 3,
            cos(angle2) * 2 + x - j - 3,
            sin(angle2) * 4 + y + j + 3
          );
        }
      }
      pop();
    }
    pop();
  }
  pop();

  // Octagon Region
  push();
  stroke(255);
  noFill();
  beginShape();
  for (var angle = 0; angle < TAU; angle += PI / 4) {
    vertex(cos(angle + PI / 8) * 140 + 360, sin(angle + PI / 8) * 140 + 360);
  }
  endShape(CLOSE);
  drawingContext.clip();

  //  Celestial Space
  push();
  fill(255);
  var starArray = [];
  for (var distance = 65; distance < 100; distance += 5) {
    for (
      var angle = distance;
      angle < TAU + distance;
      angle += 0.1 + random(0.4) - distance * 0.0005
    ) {
      var x = cos(angle) * distance + 360;
      var y = sin(angle) * distance + 360;
      circle(x, y, 1);
      starArray
        .filter((e) => dist(e.x, e.y, x, y) < 8)
        .forEach((e) => line(e.x, e.y, x, y));
      starArray.push({ x: x, y: y });
    }
  }

  //  Holoscope Space
  push();
  noFill();
  for (var distance = 200; distance < 300; distance += 5) {
    circle(360, 360, distance);
  }

  noStroke();
  fill(0);
  for (var angle = 0; angle < TAU; angle += PI / 4) {
    push();
    var BaseGalaxyAngle1 = angle + PI / 8;
    var BaseGalaxyAngle2 = angle + PI / 8 + PI / 4;
    var PointGalaxyAngle = angle + PI / 4;
    bezier(
      cos(BaseGalaxyAngle1) * 105 + 360,
      sin(BaseGalaxyAngle1) * 105 + 360,
      cos(PointGalaxyAngle) * 125 + 360,
      sin(PointGalaxyAngle) * 125 + 360,
      cos(PointGalaxyAngle) * 125 + 360,
      sin(PointGalaxyAngle) * 125 + 360,
      cos(BaseGalaxyAngle2) * 140 + 360,
      sin(BaseGalaxyAngle2) * 140 + 360
    );
    bezier(
      cos(BaseGalaxyAngle1) * 140 + 360,
      sin(BaseGalaxyAngle1) * 140 + 360,
      cos(PointGalaxyAngle) * 125 + 360,
      sin(PointGalaxyAngle) * 125 + 360,
      cos(PointGalaxyAngle) * 125 + 360,
      sin(PointGalaxyAngle) * 125 + 360,
      cos(BaseGalaxyAngle2) * 105 + 360,
      sin(BaseGalaxyAngle2) * 105 + 360
    );

    var zodiacAngle = angle + PI / 8;
    translate(cos(zodiacAngle) * 120 + 360, sin(zodiacAngle) * 120 + 360);
    rotate(zodiacAngle);
    beginShape();
    for (var edge = 0; edge < TAU; edge += PI / 3) {
      vertex(cos(edge) * 15, sin(edge) * 15);
    }
    endShape(CLOSE);

    push();
    rectMode(CENTER);
    stroke(255);
    if (random(1) < 0.5) {
      circle(0, 0, random(10));
    }
    for (var i = 0; i < 2; i++) {
      var pattern = int(random(3));
      var size = random(7) + 3;
      var distance = random(4) + 3;
      switch (pattern) {
        case 0:
          var randomAngle = random(TAU);
          circle(cos(randomAngle) * distance, sin(randomAngle) * 5, size);
          circle(
            cos(randomAngle + PI) * distance,
            sin(randomAngle + PI) * 5,
            size
          );
          break;
        case 1:
          var randomAngle = random(TAU);
          var randomAngle2 = random(TAU);
          var randomAngle3 = random(PI) + PI / 4;
          arc(
            cos(randomAngle) * distance,
            sin(randomAngle) * distance,
            size,
            size,
            randomAngle2,
            randomAngle2 + randomAngle3
          );
          arc(
            cos(randomAngle + PI) * distance,
            sin(randomAngle + PI) * distance,
            size,
            size,
            randomAngle2 + PI,
            randomAngle2 + randomAngle3 + PI
          );
          break;
        case 2:
          var randomAngle = random(TAU);
          var randomAngle2 = random(TAU) + PI / 4;
          line(
            cos(randomAngle) * distance,
            sin(randomAngle) * distance,
            cos(randomAngle + randomAngle2) * distance,
            sin(randomAngle * randomAngle2) * distance
          );
          line(
            cos(randomAngle + PI) * distance,
            sin(randomAngle + PI) * distance,
            cos(randomAngle + randomAngle2 + PI) * distance,
            sin(randomAngle * randomAngle2 + PI) * distance
          );
          break;
      }
    }
    pop();
    pop();
  }
  pop();

  pop();

  //  Sun Symbol
  push();
  fill(0);
  circle(360, 360, 80);

  for (var angle = 0; angle < TAU; angle += 0.1) {
    length = 4;
    for (
      var distance = 0;
      distance < 40;
      distance += length = (40 - distance) / 20 + random(1) + 1
    ) {
      line(
        cos(angle) * distance + 360,
        sin(angle) * distance + 360,
        cos(angle + distance / 360) * (distance + length - 2) + 360,
        sin(angle + distance / 360) * (distance + length - 2) + 360
      );
    }
  }

  for (var angle = PI / 2; angle < TAU - PI / 8; angle += PI / 24) {
    line(
      cos(angle) * 45 + 360,
      sin(angle) * 45 + 360,
      cos(angle) * 55 + 360,
      sin(angle) * 55 + 360
    );
  }
  pop();

  //  Moon Symbol
  push();
  fill(0);
  beginShape();
  for (var angle = -PI / 2; angle < PI; angle += 0.1) {
    vertex(cos(angle) * 60 + 360, sin(angle) * 60 + 360);
  }
  for (var angle = PI; angle > -PI / 2; angle -= 0.1) {
    vertex(cos(angle) * 50 + 350, sin(angle) * 50 + 350);
  }
  endShape(CLOSE);
  drawingContext.clip();
  var addAngle = 0;
  for (var distance = -10; distance <= 10; distance += 2) {
    for (
      angle = PI;
      angle > -PI / 2;
      angle -= (addAngle = random(1) / 10) + 0.01
    ) {
      var adjustDistance =
        55 + sin(((angle - PI) / (PI + PI / 2)) * PI) * distance;
      line(
        cos(angle) * adjustDistance + 355,
        sin(angle) * adjustDistance + 355,
        cos(angle + addAngle * 0.8) * adjustDistance + 355,
        sin(angle + addAngle * 0.8) * adjustDistance + 355
      );
    }
  }

  pop();

  pop();

  //  Triangle Region
  push();
  stroke(255);
  noFill();
  rectMode(CENTER);
  var shape = 0;
  for (var angle = 0; angle < TAU; angle += PI / 4) {
    push();
    var x = cos(angle) * 185 + 360;
    var y = sin(angle) * 185 + 360;
    var angle1 = angle + PI / 2 + PI / 4;
    var angle2 = angle - PI / 2 - PI / 4;
    triangle(
      x,
      y,
      x + cos(angle1) * 42,
      y + sin(angle1) * 42,
      x + cos(angle2) * 42,
      y + sin(angle2) * 42
    );
    drawingContext.clip();
    if (shape % 2 == 0) {
      for (var size = 20; size < 60; size += 7) {
        circle(cos(angle) * 167 + 360, sin(angle) * 167 + 360, size);
      }
    } else {
      for (var size = 15; size < 60; size += 7) {
        square(cos(angle) * 167 + 360, sin(angle) * 167 + 360, size);
      }
    }
    shape++;

    translate(cos(angle) * 167 + 360, sin(angle) * 167 + 360);
    rotate(angle);
    for (var i = 0; i < 3; i++) {
      var angle1 = (int(random(6)) * TAU) / 6;
      var angle2 = angle1 + ((int(random(2)) + 2) * TAU) / 6;
      line(cos(angle1) * 6, sin(angle1) * 6, cos(angle2) * 6, sin(angle2) * 6);
    }
    pop();
  }
  pop();

  //  Outer Circle : Border
  push();
  stroke(255);
  strokeWeight(6);
  noFill();
  circle(360, 360, 660);
  pop();

  push();
  stroke(255);
  for (var angle = 0; angle < TAU; angle += PI / 128) {
    line(
      cos(angle) * 330 + 360,
      sin(angle) * 330 + 360,
      (nextX = cos(angle) * 340 + 360),
      (nextY = sin(angle) * 340 + 360)
    );
    for (var i = 0; i < 2; i++) {
      var offset = 0;
      var length = (i + 1) * 2;
      if (random(1) > 0.2) {
        if (random(1) > 0.5) {
          offset = PI / 2 + PI / 4;
        } else {
          offset = -PI / 2 - PI / 4;
        }
        length = 6;
      }
      line(
        nextX,
        nextY,
        (nextX = nextX + cos(angle + offset) * length),
        (nextY = nextY + sin(angle + offset) * length)
      );
      line(
        nextX,
        nextY,
        (nextX = nextX + cos(angle) * length),
        (nextY = nextY + sin(angle) * length)
      );
    }
    circle(nextX, nextY, 2);
  }
  pop();

  push();
  stroke(255);
  noFill();
  for (var i = 0; i < 4; i++) {
    var angle = PI / 4 + (i * PI) / 2;
    push();
    translate(cos(angle) * 420 + 360, sin(angle) * 420 + 360);
    rotate(angle);
    for (var distance = 45; distance > 0; distance -= 6) {
      beginShape();
      for (var angle2 = PI + PI / 2; angle2 < TAU + PI / 2; angle2 += PI / 32) {
        switch (i) {
          case 2:
            vertex(
              asin(cos(angle2)) * distance,
              (asin(sin(angle2)) * distance) / 2
            );
            break;
        }
      }
      endShape();
    }
    for (var offset = -22.5; offset < 24; offset += 3) {
      switch (i) {
        case 2:
          var target = -offset / 35;
          var target2 = target - (offset / abs(offset)) * 0.03;
          var x1 = 0;
          var y1 = asin(sin(PI + PI / 2)) * offset;
          var x2 = -410 + cos(target2) * 350;
          var y2 = sin(target2) * 350;
          line(x1, y1, x2, y2);
          var angle = atan2(y2 - y1, x2 - x1) - PI;
          line(
            x2,
            y2,
            x2 + cos(angle + 0.2) * (30 - abs(offset)),
            y2 + sin(angle + 0.2) * (30 - abs(offset))
          );
          line(
            x2,
            y2,
            x2 + cos(angle - 0.2) * (30 - abs(offset)),
            y2 + sin(angle - 0.2) * (30 - abs(offset))
          );

          push();
          translate(
            x2 + (cos(angle) * (30 - abs(offset))) / 1.5,
            y2 + (sin(angle) * (30 - abs(offset))) / 1.5
          );
          rotate(angle + PI);
          arc(0, 0, 30 - abs(offset), (30 - abs(offset)) / 2, -PI / 4, +PI / 4);
          pop();

          circle(x2, y2, 3);
          break;
      }
    }
    pop();
  }
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

  //  Elementals path
  push();
  stroke(255);
  noFill();
  for (var angle = 0; angle < TAU; angle += PI / 2) {
    push();
    var angle1 = angle - 0.128;
    var angle2 = angle + 0.128;
    triangle(
      cos(angle) * 210 + 360,
      sin(angle) * 210 + 360,
      cos(angle1) * 290 + 360,
      sin(angle1) * 290 + 360,
      cos(angle2) * 290 + 360,
      sin(angle2) * 290 + 360
    );
    drawingContext.clip();
    for (i = 12; i > 0; i--) {
      circle(cos(angle1) * 310 + 360, sin(angle1) * 310 + 360, 55 + i * 12);
      circle(cos(angle2) * 310 + 360, sin(angle2) * 310 + 360, 55 + i * 12);
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
    bezier(
      baseX + cos(shiftAngle) * 30,
      baseY + sin(shiftAngle) * 30,
      baseX + cos(shiftAngle - PI / 8) * 30,
      baseY + sin(shiftAngle - PI / 8) * 30,
      baseX + cos(shiftAngle + PI / 4) * 30,
      baseY + sin(shiftAngle + PI / 4) * 30,
      baseX,
      baseY
    );
  }
  pop();

  //  Earch circle
  push();
  fill(0);
  noStroke();
  var baseX = cos((TAU * 3) / 4) * 310 + 360;
  var baseY = sin((TAU * 3) / 4) * 310 + 360;

  circle(baseX, baseY, 65);
  drawingContext.clip();
  rectMode(CENTER);
  noFill();
  stroke(255);
  for (angle = 0; angle < TAU; angle += PI / 4) {
    push();
    translate(baseX + cos(angle) * 30, baseY + sin(angle) * 30);
    rotate(angle);
    rect(0, 0, 20, 8);
    pop();
    var shiftAngle = angle + PI / 8;
    push();
    translate(baseX + cos(shiftAngle) * 25, baseY + sin(shiftAngle) * 25);
    rotate(shiftAngle);
    rect(0, 0, 25, 4);
    pop();
    push();
    translate(baseX + cos(angle) * 12, baseY + sin(angle) * 12);
    rotate(angle);
    rect(0, 0, 10, 4);
    pop();
    push();
    translate(baseX + cos(shiftAngle) * 4, baseY + sin(shiftAngle) * 4);
    rotate(shiftAngle);
    rect(0, 0, 3, 1);
    pop();
  }
  pop();
}
