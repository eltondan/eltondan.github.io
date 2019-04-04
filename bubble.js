function Bubble(x, y, r) {
    this.radius = r; // radius of player bubble, size of the bubble
    this.vector = createVector(0,0);
    this.position = createVector(x, y); // position of bubble on the screen

    this.update = function() {
        var newVector = createVector(mouseX-width/2, mouseY-height/2); // updating  mouse movements
        newVector.setMag(4);
        this.vector.lerp(newVector, 0.1);
        this.position.add(this.vector);
    }

    this.eating = function(other) { // other is the other bubble you are eating
        var distance = p5.Vector.dist(this.position, other.position); // the distance between both the bubbles
        if (distance < this.radius + other.radius) {
            var total = PI * this.radius * this.radius + PI * other.radius * other.radius; // sum of the two radius of bubbles
            this.radius = sqrt(total / PI);

            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        fill(300);
        ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2); // size of the bubble
    }
}