const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "16 dece 2024"

function countdown(){

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecoonds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecoonds / 3600 / 24);
    const hours  = Math.floor(totalSecoonds / 3600) % 24;
    const mins = Math.floor(totalSecoonds / 60) % 60;
    const seconds = Math.floor(totalSecoonds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML= formatTime(seconds)

    

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);