const hourEl = document.querySelector(".hour"),
  minuteEl = document.querySelector(".minute"),
  secondEl = document.querySelector(".second"),
  timeEl = document.querySelector(".time"),
  dateEl = document.querySelector(".date"),
  wish = document.getElementById("wish"),
  toggle = document.querySelector(".toggle"),
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

function setTime() {
  const time = new Date(),
    month = time.getMonth(),
    day = time.getDay(),
    date = time.getDate(),
    hours = time.getHours(),
    hoursForClock = hours >= 13 ? hours % 12 : hours,
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    ampm = hours >= 12 ? "PM" : "AM";

  var wishTime = ["Good Morning", "Good Afternoon", "Good Evening"];
  if (ampm == "AM") {
    wish.innerHTML = `${wishTime[0]} Navya, What you are looking for today`;
  } else if (ampm > 12 && ampm < 4) {
    wish.innerHTML = `${wishTime[1]} Navya, What you are looking for today`;
  } else {
    wish.innerHTML = `${wishTime[2]} Navya, What you are looking for today`;
  }

  setInterval(() => {
    wish.innerHTML = "";
  }, 60 * 60 * 1000);
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);

const url = "https://api.quotable.io/random";
function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerHTML = data.content;
    })
    .catch(function (err) {
      console.log(err);
    });
}
// Repeat generateQuote() every 10 seconds
setInterval(generateQuote(), 10000);
//Note - 10000 milliseconds = 10
