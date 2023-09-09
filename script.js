const currentDayText = document.querySelector("#currentDayOfTheWeek");
const currentUTCTime = document.getElementById("currentUTCTime");
const date = new Date();

const calcCurrentDate = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  const currentDay = daysOfTheWeek[dayIndex];
  currentDayText.innerText = currentDay;
};

const calcUTCTime = () => {
  const date = new Date();
  const utcTimeMilliseconds = date.getTime();
  currentUTCTime.textContent = utcTimeMilliseconds;
};

calcCurrentDate();
calcUTCTime();
setInterval(calcUTCTime, 1000);
