let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')

function changeTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes()
    let second = date.getSeconds();
    let am_pm = "AM"

    if(hour > 12){
        hour = hour-12
        am_pm = "PM"
    }

    hour = hour<10 ? "0"+hour : hour;

    hours.innerText = hour
    minutes.innerText = minute < 10 ? "0" + minute : minute
    seconds.innerText = second < 10 ? "0" + second : second
    ampm.innerText = am_pm

}

setInterval(changeTime, 1000);