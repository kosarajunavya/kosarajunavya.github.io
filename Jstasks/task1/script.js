// function operation() {
//   var ans = document.getElementById("answer");
//   if (document.getElementById("add").checked) {
//     ans.value = calculate("add");
//   }
//   if (document.getElementById("subtract").checked) {
//     ans.value = calculate("subtract");
//   }
//   if (document.getElementById("multiply").checked) {
//     ans.value = calculate("multiply");
//   }
//   if (document.getElementById("divide").checked) {
//     ans.value = calculate("divide");
//   }
// }
// function calculate(action) {
//   var num1 = document.getElementById("num1").value;
//   var num2 = document.getElementById("num2").value;
//   var result;
//   switch (action) {
//     case "add":
//       result = parseInt(num1) + parseInt(num2);
//       break;
//     case "subtract":
//       result = num1 - num2;
//       break;
//     case "multiply":
//       result = num1 * num2;
//       break;
//     case "divide":
//       result = num1 / num2;
//       break;
//   }
//   return result;
// }
// var firstNumber = document.getElementById("firstNumber"),
//   secondNumber = document.getElementById("secondNumber"),
//   addition = document.getElementById("add"),
//   subtract = document.getElementById("sub"),
//   multiply = document.getElementById("mul"),
//   divide = document.getElementById("div");

// function operation() {
//   if (addition.checked) {
//     addNumbers();
//   } else if (subtract.checked) {
//     substractNumbers();
//   } else if (multiply.checked) {
//     multiplyNumbers();
//   } else if (divide.checked) {
//     divideNumbers();
//   }
// }

// function addNumbers() {
//   let solution = parseInt(firstNumber.value) + parseInt(secondNumber.value);
//   return (document.getElementById("ans").textContent = "Result is " + solution);
// }
// function substractNumbers() {
//   let solution = firstNumber.value - secondNumber.value;
//   return (document.getElementById("ans").textContent = "Result is " + solution);
// }
// function multiplyNumbers() {
//   solution = firstNumber.value * secondNumber.value;
//   return (document.getElementById("ans").textContent = "Result is " + solution);
// }
// function divideNumbers() {
//   solution = firstNumber.value / secondNumber.value;
//   return (document.getElementById("ans").textContent = "Result is " + solution);
// }

$(document).ready(function () {
  $(".calc").on("click", function () {
    if ($("#add").is(":checked")) {
      sum();
    }
    if ($("#sub").is(":checked")) {
      diff();
    }
    if ($("#mul").is(":checked")) {
      multiply();
    }
    if ($("#div").is(":checked")) {
      divide();
    }
  });

  function sum() {
    var a = parseInt($("#firstNumber").val());
    var b = parseInt($("#secondNumber").val());
    var sum = a + b;
    $("#ans").html("sum is " + sum);
  }
  function diff() {
    var a = parseInt($("#firstNumber").val());
    var b = parseInt($("#secondNumber").val());
    var diff = a - b;
    $("#ans").html("Difference is " + diff);
  }
  function multiply() {
    var a = parseInt($("#firstNumber").val());
    var b = parseInt($("#secondNumber").val());
    var multiply = a * b;
    $("#ans").html("product is " + multiply);
  }
  function divide() {
    var a = parseInt($("#firstNumber").val());
    var b = parseInt($("#secondNumber").val());
    var divide = a / b;
    $("#ans").html("result is " + divide);
  }
});
