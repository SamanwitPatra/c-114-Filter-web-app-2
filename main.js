noseX = 30;
noseY = 0;


function preload(){
image = modelLoaded('https://postimg.cc/gxThNQ03');
}
function setup() 
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet Is Initialised");
}

function draw(){
    image(video, 0, 0, 300, 500);
    image('https://postimg.cc/gxThNQ03', video, noseX, noseY, 100, 100)
}
function take_snapshot(){
    save('filteredpicture.png');
}

function gotPoses() 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x " = +noseX);
        console.log("nose y " = +noseY);
    }
}