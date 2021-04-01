function showMessage() {
    console.log( 'Hello everyone!' );
}
showMessage();
function Message() {
    let message1 = "Hello, I'm JavaScript!"; // local variable
  
    console.log( message1 );
  }
  
  Message(); // Hello, I'm JavaScript!
  
  console.log( message );


  //

let userName = 'John';

function showMessage1() {
  let message2 = 'Hello, ' + userName;
  console.log(message);
}

showMessage1();

//

let user = 'John';

function showMessage2() {
  user = "marry"; 

  let message3 = 'Hello, ' + user;
  console.log(message3);
}

console.log( userName ); 

showMessage2();

console.log( userName );


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