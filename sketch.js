var newWidth = 100;
var newHeight = 100;


//setup function executes once
function setup(){
    createCanvas(700,450);
    background(200,185,500);
}
//draw function loops forever
function draw(){
    //backgorund(50);
   if(mouseIsPressed){
       noStroke();
       fill(100,0,100,150);
       ellipse(mouseX,mouseY,newWidth,newHeight)
   }
    
}

function display(){
    fill(50,250,50);
}    
