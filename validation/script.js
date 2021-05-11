"use strict";
//1.get all the input values from dom
const startNew = document.getElementById("start"),
  coinSpin = document.getElementById("coin-spin"),
  spinBtn = document.getElementById("spin"),
  playerName = document.getElementById("player-name"),
  betMoney = document.getElementById("bet-money"),
  selectOption = document.getElementById("select"),
  btnAdd = document.getElementById("add"),
  listAdd = document.querySelector(".list-add");
// 2. local storage part
// 2.a. first initialise the default values
var currentBet = 0;
var currentBet1 = 0;
var betMoneyV = Number(betMoney.value);
var totalMoney = 0;
var wonMoney = 0;
var spining = true;

// getting head or tail
spinBtn.addEventListener("click", () => {
  document.querySelector(".time").innerHTML =
    "Spinning in progress...Wait for 3 seconds";
  document.getElementById("contest").innerHTML = "Game is in progress";
  let chooseOption = ["H", "T"];
  let element = chooseOption[Math.floor(Math.random() * chooseOption.length)];
  setTimeout(() => {
    if (element === "H") {
      coinSpin.textContent = "H";
    } else {
      coinSpin.textContent = "T";
    }
  }, 3000);
});
// storing the elements in local storage
btnAdd.addEventListener("click", () => {
  addItem();
});
//finding the sum of calculated values
function select() {
  if (document.getElementById("head").selected) {
    currentBet += Number(betMoney.value);
  } else if (document.getElementById("tail").selected) {
    currentBet1 += Number(betMoney.value);
  }
}
// listing the elements
var items = JSON.parse(localStorage.getItem("head-or-tails")) || [];

function addItem() {
  var inputBox = document.getElementById("player-name");
  var item = inputBox.value;
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
  inputBox.value = "";
  betMoney.value = "";
  selectOption.value = "";
}

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
  ).innerHTML = `Total bets in heads ${currentBet}`;
  document.querySelector(
    ".tails-total"
  ).innerHTML = `Total bets in tails ${currentBet1}`;
}
