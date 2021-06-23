const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

}
async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    console.log(datetime+"  " +hour);

    if(hour>=04 && hour<=05){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=7){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=09){
        bg = "sunrise3.png";
    }
    else if(hour>=10 && hour<=11){
        bg = "sunrise4.png";
    }
    else if(hour>=12 && hour<=13){
        bg = "sunrise5.png";
    }
    else if(hour>=14 && hour<=15){
        bg = "sunrise6.png";
    }
    else if(hour>=16 && hour<=17){
        bg = "sunset7.png";
    }
    else if(hour>=18 && hour<=19){
        bg = "sunset8.png";
    }
    else if(hour>=20 && hour<=21){
        bg = "sunset9.png";
    }
    else if(hour>=22 && hour<=23){
        bg = "sunset10.png";
    }
    else if(hour>=24 && hour<=00){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }
backgroundImg = loadImage(bg);
}