function setup() {
	createCanvas(120, 120);
  }
  
  function draw() { 
	background(220);
	// head
	rect(50, 20, 10, 10);
	rect(20, 30, 70, 60);
	// eyes
	ellipse(40, 50, 20);
	ellipse(70, 50, 20);
	// mouth
	rect(40, 70, 30, 10);
  }