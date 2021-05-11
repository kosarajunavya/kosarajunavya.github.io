//1.get the form values from dom
const playerName = document.getElementById("playerName").value,
  betMoney = document.getElementById("betMoney").value,
  coin = document.getElementById("coin").value,
  add = document.getElementById("add"),
  output = document.getElementById("output"),
  newbtn = document.querySelector(".start");

//2. print the stored values using local storage
// function SetPlayerData() {
//   window.localStorage.setItem(playerName);
//   window.localStorage.setItem(betMoney);
//   window.localStorage.setItem(coin);
// }

// // To get Student Data
// function GetStudentData() {
//   var name = window.localStorage.getItem(playerName);
//   var money = window.localStorage.getItem(betMoney);
//   var coin = window.localStorage.getItem(coin);

//   console.log(name, money, coin);

//   output = output.innerHTML(`${name} : ${money} :${coin}`);
// }
/* calculate the total bet amount
heads = add the amount of every individual who bet on heads from local storage
tails = add the amount of every individual who bet on tails from local storage
totalbet = heads+tails
*/

// 3.flip the coin to get a random side either head or tail

function flip() {
  document.getElementById("time").innerHTML =
    "Spinning is in progress...wait for 3 seconds";

  document.getElementById("contest").innerHTML = "Game is in progress";
  setTimeout(function () {
    var toss = Math.random() * 2;
    var floor = Math.floor(toss);
    if (floor === 0) {
      document.querySelector("#result").innerHTML = "H";
      // sum all the person's bet money who opted the choice as heads
      // declare the win people names and their bet amount
      // and winner's get the double amount of what they bet(bet amount*2)
      //winnerPay = heads*2
    } else if (floor === 1) {
      document.querySelector("#result").innerHTML = "T";
      // sum all the person's bet money who opted the choice as tails
      // declare the win people names and their bet amount
      // and winner's get the double amount of what they bet(bet amount*2)
      //winnerPay = tails*2
    } else {
      document.querySelector("#result").innerHTML = "Draw";
    }
  }, 3000); //1000 ms = 1 second.
}

// 4.calculate gain or loss for company
let difference = totalbet - winnerPay;
if (totalbet > winnerPay) {
  document.querySelector(".winner").innerHTML = `${difference} is company gain`;
} else {
  document.querySelector(".winner").innerHTML = `${difference} is company loos`;
}

// 5.Reset the game
