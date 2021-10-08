var spaceImg, spaceBg;
var planetGroup;
var earthImg, marsImg, saturnImg, jupiterImg;
var felcon9Img; 
var felcon9ThrustImg;
var felcon9;
var gameState = "play";

function preload(){
    /*spaceImg = loadImage("");
    earthImg = loadImage("");
    marsImg = loadImage("");
    saturnImg = loadImage("");
    jupiterImg = loadImage("");
    felcon9Img = loadImage("");
    felcon9ThrustImg = loadImage("");*/
}

function setup() {
    createCanvas(600,600)
    space = createSprite(300, 0)
    //Add space bg here
    space.velocityY = 1

    planetGroup = new Group()
    launchPadGroup = new Group()

    felcon9 = createSprite(300,300,100,350);
    felcon9.scale = 0.3;
    //Add felcon9 image here
}

function draw() {
    background("darkblue")
    
    if (gameState == "play"){
        if (keyDown("Space")) {
            felcon9.velocityY = -12
        }

        if (keyDown("Left")) {
            felcon9.x += -3.5
        }

        if (keyDown("Right")) {
            felcon9.x += 3.5
        }

        felcon9.velocityY += 0.8

        //Infinite Bg
        if (space.y > 400){
            space.y = 300
        }
    }

    spawnPlanets()

    if (planetGroup.isTouching(felcon9) || felcon9.y > 600) {
        felcon9.destroy();
        gameState = "end";
    }

    drawSprites()

    if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
    }
}

function spawnPlanets(){
    if (frameCount % 240 == 0){
        var selectedPlanet = Math.round(random(1,4));
        if (selectedPlanet == 1){
            earth()
        } else if (selectedPlanet == 2){
            mars()
        } else if (selectedPlanet == 3){
            saturn()
        } else {
            jupiter()
        }
    }
}

function earth(){
    var earth = createSprite(Math.round(random(30, 360)), 0, 100, 100)
    earth.velocityY = 3
    //Add img here
    earth.scale = 0.5
    earth.shapeColor = "green"
    earth.lifetime = 350
    planetGroup.add(earth)
}

function mars(){
    var mars = createSprite(Math.round(random(30, 360)), 0, 75, 75)
    mars.velocityY = 3
    //Add img here
    mars.scale = 0.45
    mars.shapeColor = "orange"
    mars.lifetime = 350
    planetGroup.add(mars)
}

function saturn(){
    var saturn = createSprite(Math.round(random(30, 360)), 0, 125, 125)
    saturn.velocityY = 3
    //Add img here
    saturn.scale = 0.6
    saturn.shapeColor = "yellow"
    saturn.lifetime = 350
    planetGroup.add(saturn)
}

function jupiter(){
    var jupiter = createSprite(Math.round(random(30, 360)), 0, 175, 150)
    jupiter.velocityY = 3
    //Add img here
    jupiter.scale = 0.7
    jupiter.shapeColor = "red"
    jupiter.lifetime = 350
    planetGroup.add(jupiter)
}