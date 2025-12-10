function setup()
    {
        createCanvas(400,400);
    }

    var eye1X = 80;
    var eye1Y = 90;
    var eye1Diameter = 15;

    var eye2X = 110;
    var eye2Y = 60;
    var eye2Diameter = 15;

    // im going to be drawing a fox
    function draw()
    {
        background(220);
         //body
        fill(255,204,0)
        rect(50,100,50,50)
        triangle(50,120,50,250,250,250)
        //upper arms
        rect(50,225,25,70)
        rect(100,225,25,70)
        //paws
        fill(255,255,255)
        ellipse(50,300,50,30)
        ellipse(100,300,50,30)
        //tail
        fill(255,204,0)
        quad(280, 190, 350, 230, 280, 250, 230, 210);
        fill(255,255,255)
        triangle(280,190,350,230,280,250)
        //chest fluff
        triangle(60,140,60,210,130,210)
        //haunches
        fill(255,204,0)
        circle(200,250,110)
        //back legs
        rect(170,290,60,25)
        fill(255,255,255)
        ellipse(170,300,50,30)

        // head
        fill(255,204,0)
        triangle(50,100,200,120,90,40);
        //ears
        triangle(50,100,70,70,20,60)
        triangle(70,70,90,40,40,30)
        //eyes
        fill(51);
        circle(eye1X,eye1Y,eye1Diameter)
        circle(eye2X,eye2Y,eye2Diameter)
        //nose
        circle(200,120,20)
    if (eye1X < 100) 
        {
         eye1X++;
        }
    if (eye2Y < 80)
    {
         eye2Y++;
    }
    
    
    }