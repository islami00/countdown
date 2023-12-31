const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const YEAR = 2034;
const MONTH = 0;
const DAY = 1;
function countdown() {
  const endDate = new Date(YEAR, MONTH, DAY);
  const currentDate = new Date();
  const timeLeft = endDate - currentDate;
  const totalSecondsLeft = timeLeft / 1000;
  const secondsLeftInMinute = Math.floor(totalSecondsLeft) % 60;
  const minsLeftInHour = Math.floor(totalSecondsLeft / 60) % 60;
  const hoursLeftInDay = Math.floor(totalSecondsLeft / 3600) % 24;
  const daysLeft = Math.floor(totalSecondsLeft / (3600 * 24)); //note: math.round makes it go realllllyyyy off by a lot
  //one could also just set each constant to timeleft.getDays()??

  daysEl.innerHTML = daysLeft;
  hoursEl.innerHTML = formatTime(hoursLeftInDay);
  minsEl.innerHTML = formatTime(minsLeftInHour);
  secondsEl.innerHTML = formatTime(secondsLeftInMinute);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial call
countdown();
setInterval(countdown, 1000); 
