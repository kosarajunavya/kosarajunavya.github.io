//assignment operations
let x = 2;
const y = 3;
console.log(x);
console.log(x = y + 1);
console.log(x += y)
console.log(y);
console.log(x);
console.log(x = x - y);
console.log(x);
// var y = 2;
console.log(x = x * y);
console.log(z = 5/2);
console.log(a=5%2);
console.log(a %= 'hello');
console.log(b=5**2);
let c=2;
const d=2
console.log(c**= d);

let k=5;
console.log(k <<= 2); // left shift operator
console.log(k >>= 2); // right shift operator

let l = 5; //   (00000000000000000000000000000101)
console.log(l >>>= 2); // 1 (00000000000000000000000000000001)

let m = -5; // (-00000000000000000000000000000101)
console.log(m >>>= 2);

let a1 = 1;
let b1 = 0;

a1 &&= 2;
console.log(a1);

b1 &&= 2;
console.log(b1);

let x1 = 0;
let y1 = 1;
console.log(x1 &&= 0);
console.log(x1 &&= 1);
console.log(y1 &&= 1);
console.log(y1 &&= 0);

function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() );

console.log(true || false && false);
console.log((true || false) && false);


let x2 = 2;
let y2 = 1;
console.log(x2 ||= 0);
console.log(x2 ||= 1);
console.log(y2 ||= 1);
console.log(y2 ||= 0);

console.log(x2==y2);
console.log(x2!=y2);
console.log(x2===y2);
console.log(x2!==y2);
console.log(x2>y2);
console.log(x2>=y2);
console.log(x2<y2);
console.log(x2<=y2);

console.log('my ' + 'string');
var mystring = 'alpha';
console.log(mystring += 'bet');

var age=11;
var status = (age >= 18) ? 'adult' : 'minor';
console.log(status);