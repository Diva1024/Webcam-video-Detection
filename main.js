img="";
status1="";
objects=[];
function preload(){
img=loadImage("Elephant.jpg");
}
function setup(){
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();

}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw(){
image(video,0,0,350,350);
if(status1!=""){
    r=random(255);
    g=random(255);
    b=random(255);
    objectDetector.detect(video,gotresult);
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status: object detected";
        document.getElementById("number_of_objects").innerHTML="Number of Objects detected are :" + objects.length;
        fill(r,g,b);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+ percent +"%",objects[i].x+20,objects[i].y + 20);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
}
}
function modelloaded(){
    console.log("modelloaded");
    status1=true;

}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;

}