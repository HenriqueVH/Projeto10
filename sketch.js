var barco_img,barco,mar,mar_img;

function preload(){

barco_img = loadAnimation("ship-1.png","ship-2.png")
mar_img = loadImage("sea.png")

}








function setup(){
createCanvas(windowWidth,400)
mar = createSprite(windowWidth/2,200);
mar.addImage(mar_img);
mar.scale = 0.3
barco = createSprite(322,250,50,50)
barco.addAnimation("nomeQualquer",barco_img)
barco.scale = 0.35
mar.velocityX = -3;






}




function draw(){
  background( "orange")
 text(mouseX+","+mouseY,mouseX,mouseY)
drawSprites()
if (mar.x <= 60){
mar.x = windowWidth/2
}

}