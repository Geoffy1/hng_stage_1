const slackUserName = document.querySelector("[data-testid='slackUserName']");
const slackDisplayImage = document.querySelector("[data-testid='slackDisplayImage']");
const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");
const myTrack = document.querySelector("[data-testid='myTrack']");
const githubURL = document.querySelector("[data-testid='githubURL']");

// To set Slack name and profile picture
const setSlackInfo = () => {
  slackUserName.textContent = "Geofrey";
  slackDisplayImage.src = "slack-profile-picture.jpg";
  slackDisplayImage.alt = "Geofrey";
};

// This function sets current day of the week
const setCurrentDayOfTheWeek = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = new Date().getDay();
  const currentDay = daysOfTheWeek[dayIndex];
  currentDayOfTheWeek.textContent = `Current Day: ${currentDay}`;
};

// Function to set current UTC time
const setCurrentUTCTime = () => {
  const currentDate = new Date();
  const utcTimeString = currentDate.toUTCString();
  currentUTCTime.textContent = `Current Time: ${utcTimeString}`;
};

// Function to set your actua track
const setMyTrack = () => {
  myTrack.textContent = "Track: Frontend";
};

// a Function to set GitHub URL
const setGitHubURL = () => {
  githubURL.href = "https://github.com/Geoffy1/hng_stage_1";
  githubURL.textContent = "GitHub Repository";
};

// Calls the functions to set the data
setSlackInfo();
setCurrentDayOfTheWeek();
setCurrentUTCTime();
setMyTrack();
setGitHubURL();

// Updates the UTC time every second
setInterval(setCurrentUTCTime, 1000);
