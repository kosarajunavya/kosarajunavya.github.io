var a = 3;
var b = -2;
if(a && b == true){
    console.log("both the variables are same"); 
} else{
    console.log("both are distinct variables");
}

var x1 = 'name';
y1 = '3';
if (x1 == 'name' || y1 == 3){
    console.log("return value is true")
} else {
    console.log("return value is false")
}

var x=10;
var y=5;
if (x>y){
    z=x+y;
    console.log(z);
}else{
    z=x*y;
    console.log(z);
}

let c=4, d=9, e=9;
if (c>d){
    k=c+d;
    console.log(k);
}else if (d>e){
    k=d+e;
    console.log(k);
}
else{
    k=c+e;
    console.log(k);
} 

var b = new Boolean(true);
if (b == 1){
    console.log("value is boolean")
}else{
    console.log("value is string")

}

var b1 = new Boolean(false);
if (b1 == "false"){
console.log("value is boolean");
}else{
    console.log("value is not boolean")
}
console.log(typeof(b1));


var fruittype = "Bananas";
// var fruittype = "Mangoes";
switch (fruittype) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
     console.log(`Sorry, we are out of ${fruittype}.`);
  }
  console.log("Is there anything else you'd like?");


let a4 = 2 + 2;

switch (a4) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}
let ax = "1";
let bx = 0;

switch (+ax) {
  case bx + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
}
 
var m = [1,2,3,4,5,6];
for(let i=0;i<m.length;i++){
    console.log(i);
    console.log(i,m[i]);
}

var m1 = [1,2,3,4,5,6];
for(let i=0;i<m1.length;++i){
    console.log(i);
    console.log(i,m1[i]);
}

let n = [2,3,4,5];
for(let i=n.length; i>0; i--){
    console.log(i);
    console.log(i,n[i]);
}

for(var i=1; i<=4; i++){
    console.log(i);
    console.log("*".repeat(i));
 }

 let i1 = 0;
 while (i1 < 3) { // shows 0, then 1, then 2
   console.log( i1 );
   i1++;
 }

 let j = 0;
do {
  console.log( j );
  j++;
} while (j < 3);

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );

for (let i2 = 0; i2 < 10; i2++) {

    // if true, skip the remaining part of the body
    if (i2 % 2 == 0) continue;
  
    console.log(i2); // 1, then 3, 5, 7, 9
  }

//   (i > 5) ? alert(i) : continue; //break and continue cannot be accepted in ternary operation

// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // if an empty string or canceled, then break out of both loops
//       if (!input) break outer;{
//          console.log("given input is valid");
//       } 
  
//     }
//   }
//   console.log('Done!');

  let studentsData = [['Jack', 24], ['Sara', 23],];

for(let i = 0; i < studentsData.length; i++){

    let innerArrayLength = studentsData[i].length;
    
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}

let sum9 = 0;
let number9 = 0;

while (number9 >= 0) {

    // add all positive numbers
    sum9 += number9;

    // take input from the user
    number9 = parseInt(prompt('Enter a number: '));

    // continue condition
    if (isNaN(number9)) {
        console.log('You entered a string.');
        number9 = 0; // the value of number is made 0 again
        continue;
    }

}

// display the sum
console.log(`The sum is ${sum9}.`);