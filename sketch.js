var bubble;

var bubbles = []; // array of bubbles
var zoom = 1;

function setup() {
    createCanvas(1640, 790);
    bubble = new Bubble(0, 0, 30);
    for (var i = 0; i < 200; i++) { // printing on the screen the amount of bubbles
        var x = random(-width,width); // randomizing the bubbles on screen making them more spread out
        var y = random(-height,height); // randomizing the bubbles on screen making them more spread out
        bubbles[i] = new Bubble(x, y, 10); // how big the array of bubbles are
    }
}

function draw() {
    background(0); // black background

    translate(width/2, height/2);
    var newzoom = 30 / bubble.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom); // scaling the world each time it eats
    translate(-bubble.position.x, -bubble.position.y);

    for (var i = bubbles.length-1; i >=0; i--) { // removing bubbles from the array for looping
        bubbles[i].show(); // showing the array of bubbles on screen
        if (bubble.eating(bubbles[i])) {
            bubbles.splice(i, 1); // removing one element starting at index i, if eaten
        }
    }


    bubble.show();
    bubble.update();

}