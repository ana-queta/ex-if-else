function setup() {
  createCanvas(windowWidth, windowHeight);
    frameRate(14);
    noFill();
    stroke(0);

}

function draw() {
  background(250);

    const squareSize = min(width, height) / 8;
    const gap = squareSize / 4;
    const step = squareSize + gap;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        if (mouseX < width / 2) {
          if (mouseY < height / 2) {
            fill(random(120, 256), 0, 0);
          } else {
            fill(0, 0, random(120, 256));
          }
        } else {
          if (mouseY < height / 2) {
            fill(0, random(120, 256), 0);
          } else {
            fill(random(120, 256), random(120, 256), 0);
          }
        }

        strokeWeight(random(2, 20));
        rect(x, y, squareSize, squareSize);
      }
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}