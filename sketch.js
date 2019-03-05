var canvas;
var r;
var b;


let dots = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

   r = random(220, 250);
   b = random(200, 220);



}

function draw() {
  //frameRate(20);
  //r = random(10, 30);
  dots.push(new Dot(50, 50, 25, 25));
  //background(220);
  // clear();
  // fill(255, 50, 245, 50);
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 100,50, 25);
  // fill(0);
  // textSize(30);
  // text(">_<", mouseX-25, mouseY+6);
  // noStroke();
  // fill(random(50, 200), 15, random(50, 200), 50);
  // ellipse(random(((windowWidth / 2) - 300), ((windowWidth / 2) + 300)), random(((windowHeight / 2) - 50), ((windowHeight / 2) + 50)), r, r);
  for (var i = 0; i < dots.length; i++) {
    dots[i].display();
    if (dots.length > 100) {
      noLoop();
      dots.length = 0;
    }
  }
}

class Dot {
  constructor() {
    this.x = random(((windowWidth / 2) - 300), ((windowWidth / 2) + 300));
    this.y = random(((windowHeight / 2) - 100), ((windowHeight / 2) + 100));
    this.diameter = random(10, 300);

  }


  display() {

    noStroke();
    fill(r, 55, b, 10);
    //fill(random(50, 200), 15, random(50, 200));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }


}