function getInputValue() {
    var startTime, endTime, numberOfLaps, Answer;
    var startTime =
        document.getElementById("stTime").value;

    var endTime =
        document.getElementById("endTime").value;

    var numberOfLaps = (2* 22/7 *21)
        document.getElementById("NoLaps").value;

    var Answer = (numberOfLaps / endTime - startTime);
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Speed Of Kamal" + "=" + Answer + "ms-1";
}