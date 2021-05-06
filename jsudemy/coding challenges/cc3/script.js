// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("both win the trophy");
// } else {
//   console.log("no one wins the trophy");
// }

document.getElementById("btn").onclick = function () {
  var a = document.getElementById("game1").value;
  var b = document.getElementById("game2").value;
  var c = document.getElementById("game3").value;

  // pass the numbers to the average function!
  document.getElementById("result1").innerHTML = avg(a, b, c);
};
function avg(a, b, c) {
  // force the input as numbers *1
  var result1 = (a * 1 + b * 1 + c * 1) / 3;
  return parseFloat(result1);
}
document.getElementById("btnx").onclick = function () {
  var x = document.getElementById("gamex").value;
  var y = document.getElementById("gamey").value;
  var z = document.getElementById("gamez").value;

  // pass the numbers to the average function!
  document.getElementById("result2").innerHTML = avg1(x, y, z);
};
function avg1(x, y, z) {
  // force the input as numbers *1
  var result2 = (x * 1 + y * 1 + z * 1) / 3;
  return parseFloat(result2);
}
function winner() {
  var result1 = document.getElementById("result1").innerHTML;
  var result2 = document.getElementById("result2").innerHTML;
  // console.log(parseInt(result1));
  // console.log(parseInt(result2));
  var data = "";
  if (parseFloat(result1) > parseFloat(result2)) {
    data = "First Team Wins the game";
  } else if (parseFloat(result1) < parseFloat(result2)) {
    data = "Second Team wins the game";
  } else {
    data = "Please enter the values";
  }
  document.getElementById("winnerteam").innerHTML = data;
}
