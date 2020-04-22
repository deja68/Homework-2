let counter = 0;
let pomodoroTimeLeft = 1500;
let currTime = document.getElementById("pomodoroTime");

let tabLinks = document.getElementsByClassName("tabLinks");
for(let i=0; i<tabLinks.length; i++){
    tabLinks[i].addEventListener('click', pomodoroTab);
}
function pomodoroTab(){
        if(this.innerHTML=== "Pomodoro"){
            pomodoroTimeLeft = 1500;
            currTime.innerHTML = convertSeconds(pomodoroTimeLeft - counter);
            document.title = "(" + currTime.innerHTML + ") Tomato Timer" ;
        } else if (this.innerHTML === "Short Break"){
            pomodoroTimeLeft = 300;
            currTime.innerHTML = convertSeconds(pomodoroTimeLeft - counter);
            document.title = "(" + currTime.innerHTML + ") Tomato Timer" ;
        } else if (this.innerHTML === "Long Break"){
            pomodoroTimeLeft = 600;
            currTime.innerHTML = convertSeconds(pomodoroTimeLeft - counter);
            document.title = "(" + currTime.innerHTML + ") Tomato Timer" ;
        } 
        return pomodoroTimeLeft;
}



function convertSeconds(s){
    let min = Math.floor(s / 60);
    let sec = s % 60;
    let minStr = "";
    let secStr = "";

    if(Math.floor(min/10)===0 && Math.floor(sec/10)===0){
        minStr = min.toString();
        min = '0' + minStr;
        secStr = sec.toString();
        sec = '0' + secStr;
    } else if (Math.floor(sec/10)===0){
        secStr = sec.toString();
        sec = '0' + secStr;
    } else if(Math.floor(min/10)===0){
        minStr = min.toString();
        min = '0' + minStr;
    }
    return min + ":" + sec;
   
}

let audio = new Audio();
audio.src = "ups.mp3";

let interval = 0;


let startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click',setUp);
function setUp(){
    pomodoroTimeLeft = pomodoroTab();
    currTime.innerHTML = convertSeconds(pomodoroTimeLeft - counter);
    document.title = "(" + currTime.innerHTML + ") Tomato Timer" ;

    interval = setInterval(timeIt,1000);
    function timeIt(){
        counter++;
        currTime.innerHTML = convertSeconds(pomodoroTimeLeft - counter);
        document.title = "(" + currTime.innerHTML + ") Tomato Timer" ;
        if(counter === pomodoroTimeLeft){
            clearInterval(interval);
            audio.play(); 
            counter = 0;
            pomodoroTab();
            currTime.innerHTML = convertSeconds(pomodoroTimeLeft - counter);
            document.title = "(" + currTime.innerHTML + ") Tomato Timer" ;
        }
    }
}

let stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener('click', stopTimer);
function stopTimer(){
    clearInterval(interval);
}


let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetTimer);
function resetTimer(){
    counter = 0;
    pomodoroTimeLeft =  pomodoroTab();
    currTime.innerHTML = convertSeconds(pomodoroTimeLeft - counter);
    document.title = "(" + currTime.innerHTML + ") Tomato Timer" ;
}

