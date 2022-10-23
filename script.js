console.log('working..')

let timerInterval;
let startTime;
let elapsedTime=0;


function timestamp(time) {
    //get the current time difference between 1970 and today 
    let hourdif = time / 3600000;
    let hour = Math.floor(hourdif);
    //convert difference into hour and then remove deciamls part 
    if (hour<9){
        hour="0"+hour
    }
    let minutedif = (hourdif - hour) * 60;
    let min = Math.floor(minutedif);
    if (min<9){
        min="0"+min
    }
    
    //take the remove decimal part and convert it into minutes
    let secdiff = (minutedif - min) * 60;
    let sec = Math.floor(secdiff);
    if (sec<=9){
        sec="0"+sec
    }
    timestampp=`${hour}:${min}:${sec}`;
    console.log(timestampp);
    return timestampp;
  }


 //generate current timestamp difference every second 
function start() {
    startTime = Date.now();
    timerInterval=setInterval(function displaytime() {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").innerHTML = timestamp(elapsedTime)
      document.getElementById('stop').style.display='block';
      document.getElementById('start').style.display='none';
      ;
    }, 1000);
    // running=true;
    
  }

  function stop (){
    clearInterval(timerInterval);
    document.getElementById('start').style.display='block';
    document.getElementById('stop').style.display='none';

    
}
function restart() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
 
  }




  let play = document.getElementById("start");
  let pause = document.getElementById("stop");
  let reset= document.getElementById("restart");
  
  play.addEventListener("click", start);
 pause.addEventListener("click", stop);
//   resetButton.addEventListener("click", reset);