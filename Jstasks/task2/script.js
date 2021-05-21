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
// function propertiesOfNumber() {
//   var userInput = [];
//   userInput=document.getElementById("num-one").value;
//   userInput=userInput.split(',');
//   var largest = Math.max(...userInput)
//   var smallest = Math.min(...userInput)
// //    var largest = Number.MIN_SAFE_INTEGER;
// //    var smallest = Number.MAX_VALUE;
//   var negativeNumber = [];
//   var PositiveNumber = [];
//   var evenNumbers = [];
//   var odd = [];
//   var ar = [];
//   const array1 = [2, 3, 1];

//    console.log(Math.min(...userInput));

//   console.log(userInput);

//   for(let i=0; i<userInput.length; i++) {
//       if(userInput[i] > largest){
//           largest = userInput[i];
//       }
//       if(userInput[i] < smallest){
//           smallest = userInput[i];
//       }

//        if((parseInt(userInput[i]) % 2) == 0){
//           evenNumbers.push(userInput[i]);

//       }
//        if((userInput[i] % 2) !== 0){
//           odd.push(userInput[i]);
//       }
//       if(userInput[i] > 0) {
//           PositiveNumber.push(userInput[i]);
//       }
//       if (userInput[i] < 0){
//           negativeNumber.push(userInput[i]);
//       }

//   }
//   console.log(evenNumbers);

//   document.getElementById("resultArea1").innerHTML = "Largest number:" + largest;
//       document.getElementById("resultArea2").innerHTML = "Smallest number:" + smallest;
//       document.getElementById("resultArea3").innerHTML = "evenNumbers userInput:" + evenNumbers.toString();
//       document.getElementById("resultArea4").innerHTML = "Odd userInput:" + odd.toString();
//       document.getElementById("resultArea5").innerHTML = "+ve userInput:" + PositiveNumber.toString();
//       document.getElementById("resultArea6").innerHTML = "-ve userInput:" + negativeNumber.toString();

// }
