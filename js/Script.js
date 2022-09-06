function getInputValue() {
var startTime, endTime, numberOfLaps, speed;
var startTime =
document.getElementById("stTime").value;

var endTime =
document.getElementById("endTime").value;

var numberOfLaps =
document.getElementById("NoLaps").value;
var speed = numberOfLaps / (endTime - startTime);
}


function myfunction() {
    document.getElementById("demo").innerHTML = "Speed Of Kamal" + "=" + speed + "ms-1";
}