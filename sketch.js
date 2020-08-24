//Create variables here
var dog, dogS, happyDog;
var database;
var food, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happyDog.png");
  
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  database.ref("Food").on("value", readStock);
  
}

function readStock(data) {

  food = data.val();

}

function writeStock(x) {

  if(x === 0) {

    x = 0;

  } else {

    x = x - 1;

  }

  database.ref("/").update({

  Food: x

  })

}

//reduce the amount of food by one if UP_ARROW key is pressed
function keyPressed(){

  if(keyCode===UP_ARROW) {

    writeStock(food);
  
  }
}

function draw() {  

  background(46, 139, 87);

  //display the images
  if(keyCode===UP_ARROW) {

    image(happyDog, 180, 245, 130, 130);

  } else {

    image(dog, 180, 245, 130, 130);

  }

  drawSprites();

  //add styles here
  fill("white");
  textSize(20);
  text("Note: Press the UP_ARROW Key to feed Tannie Milk!", 15, 30);

  //display the amount of food left
  if(food!==undefined) {

    text("Food Remaining: " +food, 150, 230);

  } else {

    text("Food Remaining: ", 150, 230);

  }

}