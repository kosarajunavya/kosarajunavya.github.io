"use strict";
//1.get all the input values from dom
const startNew = document.getElementById("startNew"),
  coinSpin = document.getElementById("coin-spin"),
  spinBtn = document.getElementById("spin"),
  playerName = document.getElementById("player-name"),
  betMoney = document.getElementById("bet-money"),
  selectOption = document.getElementById("select"),
  btnAdd = document.getElementById("add"),
  listAdd = document.querySelector(".list-add"),
  playersData = document.getElementById("playersData"),
  winnerAdd = document.getElementById("winnerAdd");

var items = JSON.parse(localStorage.getItem("head-or-tails")) || [];
let chooseOption = ["H", "T"];
let element = chooseOption[Math.floor(Math.random() * chooseOption.length)];

// initialising all the input values

var betOnHead = 0;
var betOnTail = 0;
var betMoneyV = Number(betMoney.value);
var totalMoney = 0;
var wonMoney = 0;
var spining = true;
var total = 0;
//choosing winners and printing
function winners() {
  element = items.filter((bet) => bet.selectOption === element);
  if (element) {
    var sum = 0;
    var resDiv = "<div><ul>";
    element.forEach(ResVal);
    function ResVal(item, index) {
      sum = sum + Number(item.betMoney);
      resDiv +=
        "<li>" +
        item.playerName +
        " " +
        Number(item.betMoney) * 2 +
        `(won ${item.betMoney})` +
        "</li>";
    }
    resDiv += "</ul></div>";
    document.getElementById("contest").innerHTML = resDiv;
  }
}
// getting head or tail after3 seconds and printing winners
function spin() {
  document.querySelector(".time").innerHTML =
    "Spinning in progress...Wait for 3 seconds";
  document.getElementById("contest").innerHTML = "Game is in progress";
  let total = betOnHead + betOnTail;
  let payHead = betOnHead * 2;
  let payTail = betOnTail * 2;
  setTimeout(() => {
    document.querySelector(".time").innerHTML = "";
    document.getElementById("coin-spin").innerHTML = element;
    if (element === "H") {
      document.getElementById(
        "winners"
      ).innerHTML = `Total bets in heads ${betOnHead}`;
      document.getElementById("pay").textContent =
        "Total paid to winners" + Number(payHead);
      if (payHead < total) {
        document.getElementById("gainOrLoss").textContent =
          total - payHead + "is company gain";
      } else {
        document.getElementById("gainOrLoss").textContent =
          total - payHead + "is company loss";
      }
    } else {
      document.getElementById(
        "winners"
      ).innerHTML = `Total bets in tails ${betOnTail}`;
      document.getElementById("pay").textContent =
        "Total paid to winners" + Number(payTail);
      if (payTail < total) {
        document.getElementById("gainOrLoss").textContent =
          total - payTail + "is company gain";
      } else {
        document.getElementById("gainOrLoss").textContent =
          total - payTail + "is company loss";
      }
    }
    winners();
  }, 3000);
}
// choosing the player based on which side they bet
function select() {
  if (document.getElementById("head").selected) {
    betOnHead += Number(betMoney.value);
  } else if (document.getElementById("tail").selected) {
    betOnTail += Number(betMoney.value);
  }
}
// adding the user input to local storage
function addItem() {
  var item = playerName.value;
  var item1 = betMoney.value;
  var item2 = selectOption.value;

  if (item === "") {
    return (document.getElementById("list").innerHTML =
      "you need to add name and bet");
  }
  items.push({
    playerName: item,
    betMoney: item1,
    selectOption: item2,
  });
  localStorage.setItem("head-or-tails", JSON.stringify(items));
  listItems();
  playerName.value = "";
  betMoney.value = "";
  selectOption.value = "";
}

//listing the local storage data to the user
function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li>";
    list += items[i].value + " ";
    list += "</li>";
  }
  document.getElementById("list").innerHTML = "";
  const add = document.createElement("li");
  add.innerHTML = `${playerName.value} , ${betMoney.value} : ${selectOption.value}`;
  listAdd.appendChild(add);
  select();
  document.querySelector(
    ".heads-total"
  ).innerHTML = `Total bets in heads ${betOnHead}`;
  document.querySelector(
    ".tails-total"
  ).innerHTML = `Total bets in tails ${betOnTail}`;
}

//resetting the game board for next game
startNew.onclick = function () {
  localStorage.clear("head-or-tails");
  location.reload();
};
(function () {
  for (let i = 0; i < items.length; i++) {
    playersData.innerHTML = items.values();
    console.log(items);
  }
})();
