var headX = 150;
var headY = 150;
var headDirection = 1;

var noseX = 160;
var noseY = 170;
var noseDirection = 20;

var bodyX = 112;
var bodyY = 200;
var bodyDirection = 8;

var armsX = 100;
var armsY = 200;
var armsDirection = 30

var arms2X = 180;
var arms2Y = 200;
var arms2Direction = 20


var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
    {
        createCanvas(300,500);
    }
    function draw()
    {
        background(220);
        //hair
        fill(75,40,0);
        ellipse(150,165,115,150);
        //head
        fill(255, 190, 150);
        circle(headX,headY,100);
        headX+=headDirection;
        if(headX >= 300 || headX <= 82)
    {
        headDirection *= -1;
    }

        //nose
        triangle(noseX, noseY, 160, 160, 170, 170);
        noseX+=noseDirection;
        if(noseX >= 300 || noseX <= 82)
        {
            noseDirection *= -1;
        }
        //hair, back
        fill(75,40,0);
        rect(115,100,75,35);
        rect(100,100,20,100);
        //hair, front
        rect(190,100,20,100);
        //body
        fill(300,300,128);
        rect(bodyX,bodyY,75,125);
        bodyY += bodyDirection;
        if(bodyY <= 0 || bodyY >= 375 )
    {
        bodyDirection *= -1;
    }
        //arms
        rect(armsX,armsY,25,125);
        armsY += armsDirection;
        if(armsY <= 0 || armsY >= 275 )
        {
            armsDirection *= -1;
        }
        rect(arms2X,arms2Y,25,125);
        arms2Y += arms2Direction;
        arms2X += arms2Direction;
        if(arms2X <= 300 || arms2X <= 82 && arms2Y <= 0 || arms2Y >= 275 )
        {
            arms2Direction *= -1;
        }
        //legs
        fill(75);
        rect(112,325,25,150);
        rect(162,325,25,150);
        rect(112,325,75,25);
        //eyes
        ellipse(150,150,10,20);
        ellipse(175,150,10,20);
        //title
        textSize(size);
        size+= sizeDirection;
        count++;
        if(count > 5)
        {
        sizeDirection *=-1;
        count = 0;
        }
        text('Reese Highman', 10, 30);
       
      
        
    }
    
