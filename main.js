var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content;

function stat() {
    //document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    //document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function () {
        take_snapshot();
        img_id = "selfie1";
        speak_data = "taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)
    setTimeout(function () {
        take_snapshot();
        img_id = "selfie2";
        speak_data = "taking your selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
    }, 10000)
    setTimeout(function () {
        take_snapshot();
        img_id = "selfie3"
    }, 15000)
}

camera = document.getElementById("webcam");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot() {

    Webcam.snap(function (data_uri) {
        if (img_id=="selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
        }
        if (img_id=="selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
        }
        if (img_id=="selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>'
        }
    });
    
}