status = "";

function preload() {

}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded() {
    console.log("O modelo foi carregado UwU");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}