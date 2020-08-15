var img;
var speed = 0.5; //flow speed
var maxSize = 20; //pixel brightness
var falloff = 250; //circle range
var steps = 15; //pixel cluster size/shape
var color1;
var color2;

function preload() {
	img = loadImage("pic3.JPG");
}
function setup() {
	createCanvas(1920, 1080);
	img.loadPixels();
	textAlign(CENTER);
	noStroke();

	color1 = color(0,0,0);
	color2 = color(0,0,0);
}
function draw() {
	image(img, 0, 0, img.width, img.height);
	//loadPixels();
	for (let x = 0; x < width; x+=steps) {
		for (let y = 0; y < height; y+=steps) {
			let mult = 0.1;
			// Decrease size the further it's from the mouse.
			let d = dist(mouseX, mouseY, x, y);
			if (d < falloff) {
				mult = map(d, 0, falloff, 1, 0.1);
			}
			// Calculate the size.
			let sw = cos((x*y+frameCount)*speed)*maxSize*mult;
			let absSw = abs(sw);
			
			let t;
			// Get values based on its size.
			if (sw > 0) {
				fill(color1);
				t = "I";
			} else {
				fill(color2);
				t = "|";
			}
			if (absSw > 2) {
				// Display text.
				textSize(absSw);
				text(t, x, y);
			} else {
				// If it's small enough, draw a circle as an optimization.
				ellipse(x, y, absSw, absSw);
			}
		}
	}
}