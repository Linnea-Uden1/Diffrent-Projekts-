function clock(){
    const hours = document.querySelector(".hours")
    const minuts = document.querySelector(".minutes")
    const seconds = document.querySelector(".seconds")

    hours.innerHTML = new Date().getHours();
    minuts.innerHTML = new Date().getMinutes();
    seconds.innerHTML = new Date().getSeconds();

    if(minuts.innerHTML.toString().length == 1){
       minuts.innerHTML = "0" + minuts.innerHTML;
    }
    if(seconds.innerHTML.toString().length == 1){
        seconds.innerHTML = "0" + seconds.innerHTML;
     }
     if(hours.innerHTML.toString().length == 1){
        hours.innerHTML = "0" + hours.innerHTML;
     }
}
const interval = setInterval(clock, 1000)