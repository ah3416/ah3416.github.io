var time = 0;
var count = 500;

function setup() {
  createCanvas(260, 260);

}

function draw() {
  let c = color(time/5 % 255,time/5 % 200, time/5 % 70);
  strokeWeight(7);
  stroke(c);
  background(0);
  translate(130,130);
  for(var i=0; i<count; i++) {
    var ang = 2*PI*i/count;
    var r = 50*sin(ang+time/count)+50+50*cos(time/count);
    point(r*cos(ang),r*sin(ang));
  }
  time+=5;
}