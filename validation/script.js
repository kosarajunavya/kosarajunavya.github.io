"use strict";
//1.get all the input values from dom
const startNew = document.getElementById("start"),
  coinSpin = document.getElementById("coin-spin"),
  spinBtn = document.getElementById("spin"),
  playerName = document.getElementById("player-name"),
  betMoney = document.getElementById("bet-money"),
  selectOption = document.getElementById("select"),
  btnAdd = document.getElementById("add"),
  listAdd = document.querySelector(".list-add"),
  items = JSON.parse(localStorage.getItem("head-or-tails")) || [];

// 2. local storage part
// 2.a. first initialise the default values
var betOnHead = 0;
var betOnTail = 0;
var betMoneyV = Number(betMoney.value);
var totalMoney = 0;
var wonMoney = 0;
var spining = true;

// getting head or tail
function spin() {
  document.querySelector(".time").innerHTML =
    "Spinning in progress...Wait for 3 seconds";
  document.getElementById("contest").innerHTML = "Game is in progress";
  let chooseOption = ["H", "T"];
  let element = chooseOption[Math.floor(Math.random() * chooseOption.length)];
  setTimeout(() => {
    if (element === "H") {
      coinSpin.textContent = "H";
      document.getElementById(
        "winners"
      ).innerHTML = `Total bets in heads ${betOnHead}`;
      // let payHead = `${betOnHead}*2`;
      // document.getElementById("pay").innerHTML = Number(payHead);
    } else {
      coinSpin.textContent = "T";
      document.getElementById(
        "winners"
      ).innerHTML = `Total bets in tails ${betOnTail}`;
      // let payTail = `${betOnTail}*2`;
      // document.getElementById("pay").innerHTML = Number(payTail);
    }
  }, 3000);
}
// storing the elements in local storage
btnAdd.addEventListener("click", () => {
  addItem();
});
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
  ).innerHTML = `Total bets in heads ${betOnHead}`;
  document.querySelector(
    ".tails-total"
  ).innerHTML = `Total bets in tails ${betOnTail}`;
}
// let total = `${betOnHead} + ${betOnTail}`;
// document.getElementById("totalAmount").innerHTML = total;
// if (payHead > total) {
//   document.getElementById(
//     "gainOrLoss"
//   ).innerHTML = `${payHead}-${total} to the company`;
// } else {
//   document.getElementById(
//     "gainOrLoss"
//   ).innerHTML = `${payHead}-${total} to the company`;
// }

// if (payTail > total) {
//   document.getElementById(
//     "gainOrLoss"
//   ).innerHTML = `${payTail}-${total} to the company`;
// } else {
//   document.getElementById(
//     "gainOrLoss"
//   ).innerHTML = `${payTail}-${total} to the company`;
// }
