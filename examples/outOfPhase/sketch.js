// ====================
// Testing .phase() for the new Osc class
// ====================

// create a variable for the sound file
var osc1, osc2, fft;


function setup() {
  createCanvas(800,400);
  background(30);
  stroke(255);
  strokeWeight(10);

  osc1 = new Osc('sine');
  osc2 = new Osc('sine');
  fft = new FFT();
  osc1.phase(.501);
  osc2.phase(0);
  osc1.start(); osc2.start();
}

function draw() {
  background(0);

  // analyze the waveform of all sound in the sketch
  waveform = fft.waveform();

  // draw the shape of the waveform
  beginShape();
  for (var i = 0; i<waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], 0, 256, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();
}