function finding() {
  var userInput = document.getElementById("user-input").value,
    userInputArray = userInput.split(","),
    biggestNumber = Math.max(...userInputArray),
    smallestNumber = Math.min(...userInputArray),
    evenNumbers = findEvens(userInputArray),
    oddNumbers = findOdd(userInputArray),
    positiveNumbers = findPos(userInputArray),
    negativeNumbers = findNeg(userInputArray);

  document.getElementById("result1").innerHTML =
    "biggestNumber is : " + biggestNumber;
  document.getElementById("result2").innerHTML =
    "smallestNumber is : " + smallestNumber;
  document.getElementById("result3").innerHTML =
    "evenNumbers are : " + evenNumbers;
  document.getElementById("result4").innerHTML =
    "oddNumbers are: " + oddNumbers;
  document.getElementById("result5").innerHTML =
    "positiveNumbers are: " + positiveNumbers;
  document.getElementById("result6").innerHTML =
    "negativeNumbers are: " + negativeNumbers;

  function findEvens(a) {
    var ar = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i] % 2 === 0) {
        // index is even
        ar.push(a[i]);
      }
    }

    return ar;
  }

  function findOdd(a) {
    var ar = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i] % 2 !== 0) {
        // index is even
        ar.push(a[i]);
      }
    }

    return ar;
  }
  function findPos(a) {
    var ar = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i] > 0) {
        ar.push(a[i]);
      }
    }

    return ar;
  }
  function findNeg(a) {
    var ar = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i] < 0) {
        ar.push(a[i]);
      }
    }

    return ar;
  }
}
