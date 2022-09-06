function getInputValue() {
   
}

function myFunction(){
    var startTime, endTime, numberOfLaps, Answer;
    var startTime =document.getElementById("stTime").value;
    
    
    var endTime =document.getElementById("endTime").value;
    console.log (endTime);
    var numberOfLaps = document.getElementById("NoLaps").value;

    var Answer = (2*(22/7)*21)*numberOfLaps / (endTime - startTime);

    alert(Answer);
}
    // document.getElementById("demo").innerHTML = "Speed Of Kamal" + "=" + Answer + "ms-1";