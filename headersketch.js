var time=0;
var cycle=300;
var r;
var powa;

function setup() {
  createCanvas(2160,100);
}

function draw() {
  bg = color(189,203,255);
  background(bg);
  translate(0,50);
  strokeWeight(3);
  powa = 3*sin((PI)*(time/300))**2;
  for(var i=0; i<width+1;i++){
    r = 40*sin(2*PI*(time+i**powa)/cycle);
    point(i,r);
  }
  time = (time+1)%cycle;
}