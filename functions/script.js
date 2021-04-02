function showMessage() {
    console.log( 'Hello everyone!' );
}
showMessage();

function Message() {
    let message1 = "Hello, I'm JavaScript!"; // local variable
    console.log( message1 );
  }
  Message(); // Hello, I'm JavaScript!


let userName = 'John';

function showMessage1() {
  let message2 = 'Hello, ' + userName;
}
console.log( userName );
showMessage1();

//

let user = 'John';
function showMessage2() {
  user = "marry"; 
  let message3 = 'Hello, ' + user;
  console.log(message3);
}
console.log( user ); 
showMessage2();
console.log( user );

//

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );
  }

  function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i ); // a prime
    }
  }
  showPrimes(10);

var x = myFunction(4, 3);   

function myFunction(a, b) {
  return a * b;             
}
console.log(x); 

function myFunc(theObject) {
  theObject.make = 'Toyota';
}
var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;
console.log(x = mycar.make);
myFunc(mycar);
console.log(y = mycar.make);