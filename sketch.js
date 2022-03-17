//CODE BY: PIXELGEN aka Vitones_Pixel
//Project made in collaboration with MadKrahen

let bgs = [];
let layer1;
let layer2;
let layer3 = [];
let layer4 = [];
let layer5 = [];
let layer6 = [];
let rbgs;
let rl3;
let rl4;
let rl5;
let rl6;



function preload(){
  
    layer1 = loadImage("layer1/layer1.png");
    layer2 = loadImage("layer2/layer2.png");
    
    for (var i=0; i<4; i++){
      bgs[i] = loadImage('bgs/bg'+i+'.png');
      layer3[i] = loadImage('layer3/layer3_'+i+'.png');
    }
    
    for (var i=0; i<11; i++){
      layer4[i] = loadImage('layer4/layer4_'+i+'.png');
      
    }
  
    for (var i=0; i<9; i++){
      layer5[i] = loadImage('layer5/layer5_'+i+'.png');
    }
    
    for (var i=0; i<10; i++){
      layer6[i] = loadImage('layer6/layer6_'+i+'.png'); 
    }
    
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  function rnd_btw(min, max) {return fxrand() * (max - min) + min;}   
  function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}   
  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return             Math.floor(fxrand() * (max - min + 1)) + min;}
  
  rbgs = rnd_int(0,3);
  rl3 = rnd_int(0,3);
  rl4 = rnd_int(0,10);
  rl5 = rnd_int(0,8);
  rl6 = rnd_int(0,9);
  
  
}

function draw() {
  background(bgs[rbgs], windowWidth, windowHeight);
  image(layer1, 0, 0, windowWidth, windowHeight);
  image(layer2, 0, 0, windowWidth, windowHeight);
  image(layer3[rl3], 0, 0, windowWidth, windowHeight);
  image(layer4[rl4], 0, 0, windowWidth, windowHeight);
  image(layer5[rl5], 0, 0, windowWidth, windowHeight);
  image(layer6[rl6], 0, 0, windowWidth, windowHeight);
  
}