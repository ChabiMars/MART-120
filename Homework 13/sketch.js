
var characterX = 70;
var characterY = 70;
//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 20; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(500);
        diameters[i] = getRandomNumber(50);
    }
    createCharacter(200, 350);
}

function draw() {
    background(200, 80, 80);
    stroke(10);
    fill(0);

    createBorders(10);

    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter;
    drawCharacter();
    characterMovement();


    //enemy
    fill(0,0,0);
    // draw the shape
    for (var i = 0; i < 40; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];
        // check the bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(0);
        textSize(13);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // create the shape when mouse click
    fill(60,80,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    //top
    rect(0, 0, width, thickness);
    //left
    rect(0, 0, thickness, height);
    //bottom
    rect(0, height - thickness, width, thickness);
    //upper right
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}