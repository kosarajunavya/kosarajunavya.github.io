let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(str2);
console.log(str);
console.log(phrase);

var a=5, b=10;
var c= a+b;
console.log(a+b);

a=b;
console.log(a, b);

var k = 'navya';
var a=22;
console.log(k);

// var isGreater = 0 > 1;
// alert( isGreater );

var age;
console.log(age);

console.log(typeof 'navya');
console.log(typeof 10n);
console.log(typeof NaN);
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof console.log);


const NaN1 = 2 * "abc";
const NaN2 = 2 * "abc";
console.log(NaN1, NaN2);

var m=10, n=11;
if (m == n)
console.log("both the values are equal");
else
// alert("both are not equal");

var fruits = ["banana", "sapota", "papaya" ,"orange"] 
console.log(fruits);
console.log(fruits[1], fruits[0], fruits[3], fruits[4]);

// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// console.log(arr);
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push('amla'));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift('grapes'));

// older method
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// newer version
let fruiti = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruiti) {
  console.log(fruit)
}

console.log(arr.length);


let arra = [1, 2, 3];

console.log( arra ); // 1,2,3
console.log( String(arra) === '1,2,3' );

console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); 