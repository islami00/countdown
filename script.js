const end = '1 Jan 2024'; //this is the only valid date format i know so far
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



function countdown () {
    const endDate= new Date(end) //the date here is in ms
    const currentDate= new Date();
    const timeLeft = endDate - currentDate;
    const totalSeconds = timeLeft/1000;
    const mins = Math.floor(totalSeconds/60) %60; //this works without the brackets as the functon returns a value
    const hours = Math.floor(totalSeconds/3600) % 24; //this is cuz we'll be viewing on a per day basis
    const days= Math.floor(totalSeconds/(3600*24));//note: math.round makes it go realllllyyyy off by a lot
    //one could also just set each constant to timeleft.getDays()??
    const seconds = Math.floor(totalSeconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time; //this works cuz the string at front starts the addition as string. This makes things easierinstead of the '0${time}'
}
//so..` is different from '
//initial call
countdown();
setInterval(countdown, 1000);//js usually interprets date in ms


/// you can use /** */ (start from /** amd you'll get option for document this to give you a summary)