var part1,part2,part3,part4;
var lethal,average,good;
/** For the First Test */
var car1,wall1,Cwall1;
var speed1,weight1;
var deformation=0.5*weight1/22500;
var sound1
var car2,wall2,Cwall2;
var speed2,weight2;
var car3,wall3,Cwall3;
var speed3,weight3;

function setup() {
  createCanvas(1600,910);

  part1=createSprite(800,150,1600,10);
  part2=createSprite(800,350,1600,10);
  part3=createSprite(800,550,1600,10);
  part4=createSprite(800,750,1600,10);

  part1.shapeColor="white";
  part2.shapeColor="white";
  part3.shapeColor="white";
  part4.shapeColor="white";

  lethal=createSprite(1500,75,20,20);
  average=createSprite(1500,35,20,20);
  good=createSprite(1500,115,20,20);
  
  lethal.shapeColor="yellow";
  average.shapeColor="red";
  good.shapeColor="green";

  //First Test
  car1=createSprite(200,250,70,20);
  Cwall1=createSprite(1510,250,50,100);
  wall1=createSprite(1525,250,20,100);
  speed1=random(55,90);
  weight1=random(400,1500);
  sound1=loadSound("237375__squareal__car-crash.wav");

  //Second Test
  car2=createSprite(200,450,70,20);
  Cwall2=createSprite(1510,450,50,100);
  wall2=createSprite(1525,450,20,100);
  speed2=random(55,90);
  weight2=random(400,1500);

  //Third Test
  car3=createSprite(200,650,70,20);
  Cwall3=createSprite(1510,650,50,100);
  wall3=createSprite(1525,650,20,100);
  speed3=random(55,90);
  weight3=random(400,1500);

  //Fourth Test
  car4=createSprite(200,850,70,20);
  Cwall4=createSprite(1510,850,50,100);
  wall4=createSprite(1525,850,20,100);
  speed4=random(55,90);
  weight4=random(400,1500);
}

function draw() {
  background("aqua");  

//For the First Test
  if(wall1.x-car1.x<(car1.width+wall1.width/2)){

  car1.velocityX=0;

  deformation=0.5*weight1*speed1*speed1/22500;

  if(deformation<100){

    car1.shapeColor="green";

  }
  if(deformation>100 && deformation<180){

    car1.shapeColor="yellow";

  } 
  if(deformation>=180){

    car1.shapeColor="red";

  }
}

  if(keyDown("space") && car1.x===200){

    sound1.play();
    car1.velocityX=speed1;

    }
  if(keyDown("R") && wall1.x-car1.x<(car1.width+wall1.width/2)){
    reset1();
  }

  //For the Second Test
  if(wall2.x-car2.x<(car2.width+wall2.width/2)){

    car2.velocityX=0;
  
    deformation=0.5*weight2*speed2*speed2/22500;
  
    if(deformation<100){
  
      car2.shapeColor="green";
  
    }
    if(deformation>100 && deformation<180){
  
      car2.shapeColor="yellow";
  
    } 
    if(deformation>=180){
  
      car2.shapeColor="red";
  
    }
  }
  
    if(keyDown("b") && car2.x===200){
  
      sound1.play();
      car2.velocityX=speed1;
  
      }
    if(keyDown("t") && wall2.x-car2.x<(car2.width+wall2.width/2)){
      reset2();
    }
    //For the Third Test
  if(wall3.x-car3.x<(car3.width+wall3.width/2)){

    car3.velocityX=0;
  
    deformation=0.5*weight1*speed1*speed1/22500;
  
    if(deformation<100){
  
      car3.shapeColor="green";
  
    }
    if(deformation>100 && deformation<180){
  
      car3.shapeColor="yellow";
  
    } 
    if(deformation>=180){
  
      car3.shapeColor="red";
  
    }
  }
  if(keyDown("v") && car3.x===200){
  
    sound1.play();
    car3.velocityX=speed3;

    }
  if(keyDown("e") && wall3.x-car3.x<(car3.width+wall3.width/2)){
    reset3();
  }
    //For the Fourth Test
    if(wall4.x-car4.x<(car4.width+wall4.width/2)){

      car4.velocityX=0;
    
      deformation=0.5*weight1*speed1*speed1/22500;
    
      if(deformation<100){
    
        car4.shapeColor="green";
    
      }
      if(deformation>100 && deformation<180){
    
        car4.shapeColor="yellow";
    
      } 
      if(deformation>=180){
    
        car4.shapeColor="red";
    
      }
    }
    if(keyDown("n") && car4.x===200){
  
      sound1.play();
      car4.velocityX=speed4;
  
      }
    if(keyDown("y") && wall4.x-car4.x<(car4.width+wall4.width/2)){
      reset4();
    }
  drawSprites();

  //Level
  fill("black");
  text("Average",1515,80);
  fill("black");
  text("Lethal",1515,40);
  fill("black");
  text("Good",1515,120);
  //Title
  fill("black");
  textSize(65);
  text("GCSO",625,60);
  fill("black");
  textSize(55);
  text("(Global Car Safety Organisation)",365,110);

  //Level1
  fill("black");
  textSize(20);
  text("Press 'SPACE' to Start the Test",25,200);
  text("Press 'R' to Restart the Test",425,200);
  //Level2
  fill("black");
  textSize(20);
  text("Press 'B' to Start the Test",25,400);
  text("Press 'T' to Restart the Test",425,400);
  //Level3
  fill("black");
  textSize(20);
  text("Press 'V' to Start the Test",25,600);
  text("Press 'E' to Restart the Test",425,600);
  //Level4
  fill("black");
  textSize(20);
  text("Press 'N' to Start the Test",25,800);
  text("Press 'Y' to Restart the Test",425,800);
}
function reset1(){

  speed1=random(55,90);
  weight1=random(400,1500)
  car1.shapeColor="grey";
  car1.x=200;
}
function reset2(){

  speed2=random(55,90);
  weight2=random(400,1500)
  car2.shapeColor="grey";
  car2.x=200;
}
function reset3(){

  speed3=random(55,90);
  weight3=random(400,1500)
  car3.shapeColor="grey";
  car3.x=200;
}
function reset4(){

  speed4=random(55,90);
  weight4=random(400,1500)
  car4.shapeColor="grey";
  car4.x=200;
}