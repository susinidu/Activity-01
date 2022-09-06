var startTime, endTime, numberOfLaps, circum, submit;
startTime = 00;
endTime =100;
circum = (2* 22/7 * 21);
numberOfLaps = circum * 2;
submit = numberOfLaps / (endTime - startTime);

function myfunction() {
    document.getElementById("demo").innerHTML = "Speed Of Kamal" + "=" + speed + "ms-1";
}