// character
var characterX = 50;
var characterY = 50;

// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// shape created when mouse clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 500);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,200);
}
function draw()
{
    background(120,100,200);
    
    //borders
    createBorders(5);

    //exit
    textSize(16);
    text("exit", width-50,height-50)

    //create character
    drawCharacter();
    characterMovement();


    // enemy
    fill(150,30,14);
    // draw the shape
    circle(shapeX, shapeY, 10);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(10);
        textSize(30);
        text("WINNER!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
     characterY -= 5;   
    }
    if(keyIsDown(s))
    {
    characterY += 5;   
    }
    if(keyIsDown(a))
    {
     characterX -= 5;   
     console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
    characterX += 5;   
    }
}
function createCharacter(x,y)
{
characterX = x;
characterY = y;
console.log(characterX);
    
}

function drawCharacter()
{
    fill(100,40,200);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
mouseShapeX = mouseX;
mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 5;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 5;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 5;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 5;
    }

  }
  */