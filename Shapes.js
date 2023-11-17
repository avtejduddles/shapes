function setup() {
   createCanvas(windowWidth, windowHeight);
   frameRate(60);
}

function draw() {
  background(255);
  ellipse(mouseX, mouseY, 50); // follows the mouse
}

function draw() {
   print(random(256), random(256), random(256));
   fill(random(256), random(256), random(256));
   ellipse(random(width),  random(height), 50);
  
}

function mousePressed(){
  background(random(256), random(256), random(256));
}
