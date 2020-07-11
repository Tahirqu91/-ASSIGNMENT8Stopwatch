var minu = 0;
var sec = 0;
var msec = 0;

var minuheading = document.getElementById("minu");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");


var interval;
function timer(){
    msec++
    msecheading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secheading.innerHTML= sec
        msec = 0
    }else if(sec>=60){
        minu++
        sec = 0
        minuheading.innerHTML = minu;
       
    }
}
function start(){

    interval = setInterval(timer,10)
 document.getElementById('all').disabled = true;
}

function stop(){

    clearInterval(interval)
    document.getElementById('all').disabled = false;
}


function reset(){
     minu = 0;
     sec = 0;
     msec = 0;
     minuheading.innerHTML = minu
     secheading.innerHTML = sec
     msecheading.innerHTML = msec
    
     stop()
     
     
}