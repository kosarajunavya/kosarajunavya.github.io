// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `the bill was ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }`
// );

document.getElementById("btn").onclick = function () {
  let bill = document.getElementById("bill").value;
  document.getElementById("res").innerHTML = tip(bill);
};
function tip(bill) {
  // force the input as numbers *1
  if (bill) {
    var res = +bill <= 300 && +bill >= 50 ? +bill * 0.15 : +bill * 0.2;
    return parseFloat(res);
  } else {
    return `Please enter the bill value`;
  }
}
