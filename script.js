window.onload = function(){

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    function countdown(){
        const currentDate = new Date();
        let year = currentDate.getFullYear();
    
        if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
            year++;
        }
    
        const christmas = `25 Dec ${year}`;
        const christmasDate = new Date(christmas);
    
        const totalSeconds = (christmasDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }  

    // initial call  
    countdown();

    setInterval(countdown, 1000);

}
