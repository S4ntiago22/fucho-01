var canvas;
var backgroundImage;
var eq1, eq2, eq3, eq4, eq5;
var eq1Img, eq2Img, eq3Img, eq4Img, eq5Img;
 
function preload() {
backgroundImage = loadImage("imgfondo.jpg");
eq1 = loadImage("imgeqbayerm.png");
eq2 = loadImage("imgeqbayerm.png");
eq3 = loadImage("imgeqbayerm.png");
eq4 = loadImage("imgeqbayerm.png");
eq5 = loadImage("imgeqbayerm.png");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);

eq1 = createSprite (skell -500,50,6,6);3
eq1.addImage (eq1Img);

eq2 = createSprite (skell -500,50,6,6);3
eq2.addImage (eq2Img);

eq3 = createSprite (skell -500,50,6,6);3
eq3.addImage (eq3Img);

eq4 = createSprite (skell -500,50,6,6);3
eq4.addImage (eq4Img);

eq5 = createSprite (skell -500,50,6,6);3
eq5.addImage (eq5Img);
}

function draw() {
  background(backgroundImage);
  drawSprites();

}