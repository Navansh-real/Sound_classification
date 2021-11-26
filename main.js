function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tmg7Uj3sa/model.json',ModelLoaded)
}

function ModelLoaded(){
    classifier.classify(gotResults)
}

function gotResults(error, result){
    console.log("Got results");
}