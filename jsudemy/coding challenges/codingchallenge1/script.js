document.getElementById("btn").onclick = function () {
  var a = document.getElementById("userInputm").value;
  var b = document.getElementById("userInputh").value;
  // pass the numbers to the average function!
  document.getElementById("bmi1").innerHTML = bmi(a, b);
};
function bmi(a, b) {
  // force the input as numbers *1
  var result1 = (a * 1) / (b * 1) ** 2;
  return parseInt(result1);
}

document.getElementById("btn1").onclick = function () {
  var c = document.getElementById("userInput1m").value;
  var d = document.getElementById("userInput1h").value;
  // pass the numbers to the average function!
  document.getElementById("bmi2").innerHTML = bmi(c, d);
};

function bmi1(c, d) {
  // force the input as numbers *1
  var result2 = (c * 1) / (d * 1) ** 2;
  return parseInt(result2);
}

// logic for coding challenge2

function large() {
  var result1 = document.getElementById("bmi1").innerHTML;
  var result2 = document.getElementById("bmi2").innerHTML;
  // console.log(parseInt(result1));
  // console.log(parseInt(result2));
  var data = "";
  if (parseInt(result1) > parseInt(result2)) {
    data = "First person has the larger BMI";
  } else if (parseInt(result2) > parseInt(result1)) {
    data = "Second person has the larger BMI";
  } else {
    data = "Please enter the values";
  }
  document.getElementById("res").innerHTML = data;
}
