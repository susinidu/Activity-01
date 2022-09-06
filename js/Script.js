function getInputValue() {
    var startTime, endTime, numberOfLaps, answer;
    var startTime =
        document.getElementById("stTime").value;

    var endTime =
        document.getElementById("endTime").value;

    let numberOfLaps = (2* 22/7 *21)
        document.getElementById("NoLaps").value;

    var answer = numberOfLaps / (endTime - startTime);
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Speed Of Kamal" + "=" + Answer + "ms-1";
}