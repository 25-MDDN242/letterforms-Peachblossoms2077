/* these are optional special variables which will change the system */
var systemBackgroundColor = "#0f0f0f";
var systemLineColor = "#dbc325";
var systemBoxColor = "#C73869";

/* internal constants */
const backgroundColor = "#0f0f0f";
const offcolor = "#211d05";
const oncolor = "#dbc325";
const strokeColor = "#0d0d0d";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push();
  angleMode(DEGREES);
  //translate(letterData., letterData.y);
  strokeWeight(0);
  stroke(strokeColor);
  let s = letterData["size"];
  let on = color(oncolor);
  let off = color(offcolor);
  let fillArray = letterData["segments"];

 console.log(fillArray[0]) 

  fill(fillArray[0] ? on : off);
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

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
   return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
