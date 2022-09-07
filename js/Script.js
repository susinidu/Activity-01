

function myFunction(){
    event.preventDefault()
    var startTime, endTime, numberOfLaps, Answer;
    var startTime =document.getElementById("stTime").value;
    
    
    var endTime =document.getElementById("endTime").value;
    var numberOfLaps = document.getElementById("NoLaps").value;

    var Answer = (2*(22/7)*21)*numberOfLaps / (endTime - startTime);


document.getElementById("demo").innerHTML = "Speed Of Kamal" + "=" + Answer + "ms-1";
    
}