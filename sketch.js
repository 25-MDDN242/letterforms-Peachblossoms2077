const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "segments": [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
  "x": 250,
  "y": 250,
  "size": 50
};

const letterB = {
  "segments": [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0 ],
  "x": 480,
  "y": 250,
  "size": 50
};

const letterC = {
  "segments": [1, 0, 0, 1, 1, 1, 0, 0],
  "x": 710,
  "y": 250,
  "size": 50
};

const backgroundColor = "#0f0f0f";

const offcolor = "#211d05";
const oncolor = "#dbc325";
const strokeColor = "#0d0d0d";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  // clear screen
  background(backgroundColor);
  drawLetter(letterA);
  drawLetter(letterB);
  drawLetter(letterC);
}

function drawLetter(letterData) {
  push();
  angleMode(DEGREES);
  translate(letterData.x, letterData.y);
  strokeWeight(0);
  stroke(strokeColor);
  let s = letterData.size;
  let on = color(oncolor);
  let off = color(offcolor);

  fill(letterData.segments[0] ? on : off);
  rect(15, 0, 50, 10); // Top

  fill(letterData.segments[1] ? on : off);
  rect(70, 15, 10, 50); // Top-right

  fill(letterData.segments[2] ? on : off);
  rect(70, 75, 10, 50); // Bottom-right

  fill(letterData.segments[3] ? on : off);
  rect(15, 130, 50, 10); // Bottom

  fill(letterData.segments[4] ? on : off);
  rect(0, 75, 10, 50); // Bottom-left

  fill(letterData.segments[5] ? on : off);
  rect(0, 15, 10, 50); // Top-left

  fill(letterData.segments[6] ? on : off);
  rect(15, 65, 20, 10); // Middle-left

  fill(letterData.segments[7] ? on : off);
  rect(45, 65, 20, 10); // Middle-right

  push();
  rotate(70);
  fill(letterData.segments[8] ? on : off);
  rect(25, -17, 40, 10); // Cross-down top
  pop();

  push();
  rotate(-70);
  fill(letterData.segments[9] ? on : off);
  rect(-38, 58, 40, 10); // Cross-up top
  pop();

  push();
  rotate(70);
  fill(letterData.segments[10] ? on : off);
  rect(95, -20, 40, 10); // Cross-down bottom
  pop();

  push();
  rotate(-70);
  fill(letterData.segments[11] ? on : off);
  rect(-108, 55, 40, 10); // Cross-up top
  pop();

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}