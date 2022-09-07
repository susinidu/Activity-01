

function myFunction(){
    event.preventDefault()
    var startTime, endTime, numberOfLaps, Answer;
    var startTime =document.getElementById("stTime").value;
    
    
    var endTime =document.getElementById("endTime").value;
    var numberOfLaps = document.getElementById("NoLaps").value;

    var Answer = (2*(22/7)*21)*numberOfLaps / (endTime - startTime);


document.getElementById("demo").innerHTML = "Speed Of Kamal" + "=" + " " + Answer + "ms-1";
}
    

function myFunction(){
    event.preventDefault()
    var firstRunnerSpeed, secondRunnerSpeed, thirdRunnerSpeed, fourthRunnerSpeed, fifthRunnerSpeed, average;
    var firstRunnerSpeed =document.getElementById("firstRSpeed").value;
    var secondRunnerSpeed =document.getElementById("secondRSpeed").value;
    var thirdRunnerSpeed =document.getElementById("thirdRSpeed").value;
    var fourthRunnerSpeed =document.getElementById("fourthRSpeed").value;
    var fifthRunnerSpeed =document.getElementById("fifthRSpeed").value;
    

    var speed =((firstRunnerSpeed)/5 + (secondRunnerSpeed)/5 + (thirdRunnerSpeed)/5 + (fourthRunnerSpeed)/5 + (fifthRunnerSpeed)/5);

document.getElementById("Speed").innerHTML =speed + "ms-1";

}