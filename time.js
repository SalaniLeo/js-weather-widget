let hours = 0
let minutes = 0
let weathertimezone

var times = {hours,minutes,weathertimezone};

updateClock();

 var intervalId = setInterval(function() {

    updateClock();


      }, 1000);

function updateClock(){

    const d = new Date();
    times.hours = d.getHours()
    times.minutes = d.getMinutes()

    if(times.minutes <= 9){

        times.minutes = "0" + times.minutes;

    }

    if(times.hours <= 9){

        times.hours = "0" + times.hours;

    }

    date = times.hours+":"+times.minutes;

    if(document.getElementById("clock").textContent!=date){

        document.getElementById("clock").textContent=date;

    }

}