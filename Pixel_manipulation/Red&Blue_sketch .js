let img;
function preload() {
  img = loadImage('3.JPG');
}
function setup(){
  createCanvas(1920,1280);
  pixelDensity(1);
}

function draw(){
  image(img, 0, 0, img.width, img.height);
  
  loadPixels();
  for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var index = (x + y * width)*4;
        var r = pixels[index+0];
        var g = pixels[index+1];
        var b = pixels[index+2];
        var a = pixels[index+3];     
        
        pixels[index+0] = 255 - r;
        pixels[index+1] = g;
        pixels[index+2] = b;
  }
}
updatePixels();
}