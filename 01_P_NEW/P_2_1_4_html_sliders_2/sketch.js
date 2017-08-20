/**
 * Create animated radial sliders
 *
 * MOUSE
 * left click               : create SliderRose
 *
 * CONTRIBUTED BY
 * [Joey Lee](http://jk-lee.com)
 *
 * INSPIRED BY
 * [Dan Shiffman](http://shiffman.net/)
 */

'use strict';

var mySliders;

function setup() {
  mySliders = [];
  createCanvas(windowWidth, windowHeight);
  // init canvas with slider rose to the middle
  mySliders.push(new SliderRose(width/2, height/2));
}

function draw() {
  // create slider animations
  mySliders.forEach(function(d){
    d.update();
  });

}

// add a new slider rose when mouse pressed
function mousePressed(){
  mySliders.push(new SliderRose(mouseX, mouseY));
}

// define a SliderRose object
function SliderRose(_x, _y){
  this.x1 = _x;
  this.y1 = _y;
  // collect the sliders in an array
  var mySliders = [];
  var sinAngle = 0;
  // create a counter to index the sliders
  var counter = 0;
  // set the slider width
  var roseRadius = random(20, 100);
  // define how many degrees to skip from 360
  var skip = 20;
  // create sliders around a circle
  for(var i =0; i < 360; i+=skip){
    var sliderAngle = radians(i);
    var x2 = cos(sliderAngle)*roseRadius;
    var y2 = sin(sliderAngle)*roseRadius; 
    // create the slider, position, and rotate
    mySliders[counter] = createSlider(0, 255, 50)
    mySliders[counter].position(this.x1 + x2, this.y1 + y2);
    mySliders[counter].style('width', roseRadius +'px')
    mySliders[counter].style('transform', 'rotate('+i+'deg)');
    counter++;

  }

  // for each loop through the draw function
  // update the sliders according to a sin wave
  this.update = function(){
    var offset = 0;
    for(var i = 0; i < mySliders.length; i++){
      // map the value along the sine wave to the slider values
      var x = map(sin(sinAngle + offset), -1, 1, 0, 255);
      mySliders[i].value(x);
      offset += 0.050;
    }
    sinAngle += 0.1;
  }

}


