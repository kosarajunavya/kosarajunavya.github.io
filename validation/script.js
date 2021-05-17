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
  winnerAdd = document.getElementById("winnerAdd");

var items = JSON.parse(localStorage.getItem("head-or-tails")) || [];
let chooseOption = ["H", "T"];
let element = chooseOption[Math.floor(Math.random() * chooseOption.length)];

// 2. local storage part
// 2.a. first initialise the default values

var betOnHead = 0;
var betOnTail = 0;
var betMoneyV = Number(betMoney.value);
var totalMoney = 0;
var wonMoney = 0;
var spining = true;
var total = 0;

// getting head or tail
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
    element = items.filter((bet) => bet.selectOption === element);
    if (element) {
      var sum = 0;
      var resDiv = "<div class='li-style'><ul>";
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
  }, 3000);
}

// storing the elements in local storage

//finding the sum of calculated values
function select() {
  if (document.getElementById("head").selected) {
    betOnHead += Number(betMoney.value);
  } else if (document.getElementById("tail").selected) {
    betOnTail += Number(betMoney.value);
  }
}
// listing the elements

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
localStorage.clear();

function listItems() {
  var list = "";

  for (var i = 0; i < items.length; i++) {
    list += "<li>";
    list += items[i].value + " ";
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
function deleteItems() {
  localStorage.removeItem("head-or-tails");
  document.querySelector(".time").innerHTML = "";
  document.getElementById("contest").innerHTML = "Contest not yet started";
  const add = document.createElement("li");
  add.innerHTML = ``;
  document.querySelector(".heads-total").innerHTML = "";
  document.querySelector(".tails-total").innerHTML = ``;
  document.getElementById("contest").innerHTML = "";
  document.getElementById("gainOrLoss").textContent = "";
  document.querySelector(".list-add").textContent = "";
  document.getElementById("pay").textContent = "";
  document.getElementById("winners").innerHTML = "";
  document.getElementById("coin-spin").innerHTML = "Heads or Tails";
}
