"use strict";

const startNew = document.getElementById("startNew"),
  coinSpin = document.getElementById("coin-spin"),
  spinBtn = document.getElementById("spin"),
  playerName = document.getElementById("player-name"),
  betMoney = document.getElementById("bet-money"),
  selectOption = document.getElementById("select"),
  btnAdd = document.getElementById("add"),
  listAdd = document.querySelector(".list-add");

var coinArray = ["H", "T"],
  items = JSON.parse(localStorage.getItem("head-or-tails")) || [],
  headOrTails = JSON.parse(localStorage.getItem("selectOption")) || [],
  betsOnHeads = 0,
  betsOnTails = 0,
  betMoneyV = Number(betMoney.value);

spinBtn.addEventListener("click", () => {
  winnerList();
  spinCoin();
  document.querySelector(".progress").innerHTML =
    "Spinning in progress... Wait for 3 seconds";
  document.querySelector(".contest-1").innerHTML = "Game is in Progess....";
});

btnAdd.addEventListener("click", () => {
  addBet();
});

function spinCoin() {
  setTimeout(() => {
    let spinRes = coinArray[Math.floor(Math.random() * coinArray.length)];
    localStorage.setItem("spinRes", spinRes);
    document.getElementById("coin-spin").innerHTML = spinRes;
    winnerList();
    distibute();
    document.querySelector(".progress").innerHTML = "";
    document.querySelector(".contest-1").innerHTML = "";
  }, 3000);
}

// Local Storage function
function addBet() {
  let items = getBets(),
    inputBox = document.getElementById("player-name"),
    item = inputBox.value,
    item1 = betMoney.value,
    item2 = selectOption.value;

  if (item === "" && item1 === "" && item2 === "") {
    return (document.getElementById("list").innerHTML =
      "you need to add name , bet and choice");
  }
  items.push({
    playerName: item,
    betMoney: item1,
    selectOption: item2,
  });
  localStorage.setItem("bets", JSON.stringify(items));
  listItems();

  inputBox.value = "";
  betMoney.value = "";
  selectOption.value = "";
}

function getBets() {
  return JSON.parse(localStorage.getItem("bets")) || [];
}

function getSpinResult() {
  return localStorage.getItem("spinRes") || "";
}

function listItems() {
  let items = getBets();
  let resBetUl = "<ul>";
  items.forEach((item) => {
    resBetUl +=
      "<li>" +
      item.playerName +
      "," +
      item.betMoney +
      ":" +
      item.selectOption +
      "</li>";
  });
  resBetUl += "</ul>";
  document.getElementById("list").innerHTML = resBetUl;
  selectChoice();
  document.querySelector(
    ".heads-total"
  ).innerHTML = `Total bets in heads ${betsOnHeads}`;
  document.querySelector(
    ".tails-total"
  ).innerHTML = `Total bets in tails ${betsOnTails}`;
}

function winnerList() {
  let bets = getBets();
  let spinRes = getSpinResult();
  const result = bets.filter((bet) => bet.selectOption === spinRes);

  var sum = 0;
  var resDiv = "<div class='li-style'><ul>";
  result.forEach(ResVal);

  function ResVal(item, index) {
    sum = sum + Number(item.betMoney);
    resDiv +=
      "<li>" +
      item.playerName +
      " : " +
      Number(item.betMoney) * 2 +
      " Won ( " +
      Number(item.betMoney) +
      " )" +
      "</li>";
  }
  resDiv += "</ul></div>";
  document.getElementById("contest").innerHTML = resDiv;
}

// Dropdown select head or tails function
function selectChoice() {
  if (document.getElementById("head").selected) {
    betsOnHeads += Number(betMoney.value);
  } else if (document.getElementById("tail").selected) {
    betsOnTails += Number(betMoney.value);
  }
}
let headsTotal = 0;
let tailsTotal = 0;
let totalPaidToWinners = 0;

function distibute() {
  document.querySelector(
    ".headsWinners"
  ).innerHTML = `Total Paid to Winners ${(headsTotal = betsOnHeads * 2)}`;
  document.querySelector(
    ".tailsWinners"
  ).innerHTML = `Total amount recived ${(tailsTotal +=
    betsOnTails + betsOnHeads)}`;

  document.querySelector(".companyGain").innerHTML = ` ${(totalPaidToWinners =
    headsTotal - tailsTotal)} is Company gain/loss`;
}

startNew.addEventListener("click", () => {
  // refreshThePage()
  localStorage.clear("bets");
  document.querySelector(".heads-total").innerHTML = "";
  document.querySelector(".tails-total").innerHTML = "";
  document.querySelector(".heads-total-1").innerHTML = "";
  document.querySelector(".tails-total-2").innerHTML = "";
  document.querySelector(".tails-total-3").innerHTML = "";
  document.getElementById("list").innerHTML = "No bets addes yet";
  document.getElementById("contest").innerHTML = "Contest not started yet";
  document.getElementById("coin-spin").innerHTML = "Heads or Tails";
});

function refreshThePage() {
  location.reload();
}

(function () {
  listItems();
  winnerList();
})();
