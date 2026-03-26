let count = 0;
let timer = null;

function startTimer() {
    if (timer!==null) return;
    timer= setInterval(function(){
        count ++;
        document.getElementById("outputPlace").innerText = count;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}