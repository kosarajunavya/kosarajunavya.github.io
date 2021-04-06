
// for odd
const oddNumbers = [1,2,34,54,55,34,32,11,19,17,54,66,13].filter((number) => number%2!==0);
console.log(oddNumbers);
//for even
const oddNumbers = [1,2,34,54,55,34,32,11,19,17,54,66,13].filter((number) => number%2==0);
console.log(oddNumbers);

//for positive numbers
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {
  return array.filter(value => value < 0);
}
console.log(getNegativeNumbers(myArray));

// for negative numbers
var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {
  return array.filter(value => value > 0);
}
console.log(getNegativeNumbers(myArray));
function calculate(action){
    var in1 = document.getElementsById("in1").values;
    var result;
}