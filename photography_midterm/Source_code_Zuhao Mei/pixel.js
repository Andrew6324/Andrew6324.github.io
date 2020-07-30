var img;

function preload() {
	img = loadImage("mid_pic01/5.JPG");
}

function setup() {
	createCanvas(1920, 1080);
	background(0);
	noLoop();
}

function draw() {
	background(0);
	
	img.loadPixels();

	for (var y = 0; y < img.height; y += 15) {
		for (var x = 0; x < img.width; x += 15) {
			var c = img.get(x, y);
			
			fill(c);
			noStroke();
			rect(x, y, 10, 10);
		}
	}
}