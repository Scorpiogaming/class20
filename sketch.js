var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 100);
  movingrect=createSprite(800,400,100,50);
 movingrect.shapeColor="green";
 fixedrect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingrect.y=mouseY;
  movingrect.x=mouseX;
  if(movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2
    &&fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2){
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red";
  }else
  {
     movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }

  drawSprites();
}