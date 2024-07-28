var start = document.getElementById('btnStart');
var tomare = document.getElementById('btnStop');
var reset = document.getElementById('btnReset');

var displayMSecond = document.getElementById('mSecond');
var displaySecond = document.getElementById('second');
var displayMinute = document.getElementById('minute');
var dispalyHour = document.getElementById('hour');


start.addEventListener('click', function(){
    console.log("start");

    let mSeconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let timer = setInterval(function(){

        displayMSecond.innerText = mSeconds;
        displaySecond.innerText = seconds;
        displayMinute.innerText = minutes;
        dispalyHour.innerText = hours;    
        mSeconds += 1;

        if(mSeconds > 9){
            mSeconds = 0;
            seconds++;
        }

        if(seconds > 59){
            seconds = 0;
            minutes++;
        }

        if(minutes > 59){
            minutes = 0;
            hours++;
        }

    }, 100);

    tomare.addEventListener('click', function(){
        clearInterval(timer);
        console.log('tomare');

        start.disabled = true;
        tomare.disabled = true;
        reset.disabled = false;
    });

    start.disabled = true;
    tomare.disabled = false;
    reset.disabled = true;

    reset.addEventListener('click', function(){
        start.disabled = false;
        tomare.disabled = false;
        reset.disabled = false;
    })

});


$(document).ready(function(){
    $("#btnReset").click(function() {
        $("#hour, #minute, #second, #mSecond").text("0");
    });
});