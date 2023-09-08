// the current date and time
const currentDate = new Date();

// list of days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// to update elements with real-time data
document.getElementById('currentDayOfTheWeek').textContent = `Current Day: ${daysOfWeek[currentDate.getUTCDay()]}`;

const currentUTCTimeInMilliseconds = Date.now();
document.getElementById('currentUTCTime').textContent = `Current Time (UTC in milliseconds): ${currentUTCTimeInMilliseconds}`;
