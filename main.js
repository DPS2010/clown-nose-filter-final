nosex=""
nosey=""
function preload() {
 noseimage = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup () {
canvas = createCanvas(400, 400)
canvas.center()
video = createCapture(VIDEO)
video.size(400, 400)
video.hide()
//Initialize PoseNet
poseNet = ml5.poseNet(video, modelLoaded)
//Execute Posenet
poseNet.on("pose", gotPoses)
}
function draw() {
  image(video, 0, 0, 400, 400)  
  image(noseimage, nosex-20, nosey-20, 40, 40)
}
function take_snapshot() {
    save("filter_snapshot.png")
}
function modelLoaded() {
    console.log("Model Loaded")
}
function gotPoses (result) {
if (result.length > 0) {
    console.log(result)
    nosex = result[0].pose.nose.x
    nosey = result[0].pose.nose.y
}
}