function propertiesOfNumber() {
  var userInput = document.getElementById("user-input").value,
    userInputArray = userInput.split(","),
    biggestNumber = Math.max(...userInputArray),
    smallestNumber = Math.min(...userInputArray),
    evenNumbers = findEvens(userInputArray),
    oddNumbers = findOdd(userInputArray),
    positiveNumbers = findPos(userInputArray),
    negativeNumbers = findNeg(userInputArray);

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
  document.getElementById("biggestNumber").innerHTML =
    "biggestNumber is : " + biggestNumber;
  document.getElementById("smallestNumber").innerHTML =
    "smallestNumber is : " + smallestNumber;
  document.getElementById("evenNumbers").innerHTML =
    "evenNumbers are : " + evenNumbers;
  document.getElementById("oddNumbers").innerHTML =
    "oddNumbers are: " + oddNumbers;
  document.getElementById("positiveNumbers").innerHTML =
    "positiveNumbers are: " + positiveNumbers;
  document.getElementById("negativeNumbers").innerHTML =
    "negativeNumbers are: " + negativeNumbers;
}
