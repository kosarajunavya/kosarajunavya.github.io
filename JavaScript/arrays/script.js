let arr = [42]       
console.log(arr);   

let arr1 = Array(42)
console.log(arr1);

let arr2 = []
arr2.length = 42
console.log(arr2);

var a = new Array(5)
a = [1,2,3,4,5]
console.log(a);

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0],fruits[1],fruits[2]);
console.log(fruits[1],fruits[3],fruits[2]);
console.log(fruits);

fruits[2] = 'grapes';
fruits[4]= "banana";
console.log(fruits);
console.log(fruits.length);

// array methods
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push('amla'));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift('grapes'));
console.log(fruits);


let arrn = ["my", "name", "is", "navya"];
console.log(arrn);
delete arrn[1];
console.log(arrn);
console.log(arrn.length);
console.log(arrn.splice(0,1));
console.log(arrn);
console.log(arrn.splice(0,2));
console.log(arrn);
console.log(arrn.splice(0,3));
console.log(arrn);

var arrn1 = ["my", "name", "is", "navya"];
console.log(arrn1.splice(1,2));
console.log(arrn1);

var arrn2 = [1,2,5];
arrn2.splice(-1,0,3,6,78);
console.log(arrn2);

let array1 = ["t", "e", "s", "t"];
console.log( array1.slice(1, 3) ); 
console.log(array1);
console.log( array1.slice(-2) );
console.log(array1);

let array2 = [1, 2];
console.log( arr.concat([3, 4]) ); 
console.log( arr.concat([3, 4], [5, 6]) ); 
console.log( arr.concat([3, 4], 5, 6) );

/*concatenation of arrays with objects 
this will give only the array value and object as out put 
*/
let array3 = [1, 2];
let arrayLike1 = {
  0: "something",
  length: 1
};
console.log( array3.concat(arrayLike1) );

// with a special array object property we can concatenate array object elements
let array4 = [1, 2];

let arrayLike2 = {
  0: "something",
  1: "else",
  0: "hello",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
console.log( array4.concat(arrayLike2) );
 
var array5 =[0, 'navya',true];
console.log(array5.indexOf(0));
console.log(array5.indexOf(true));
console.log(array5.indexOf(null));
console.log(arr.includes(1));

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}

];

// filter property
let user = users.find(item => item.id == 2);

console.log(user.name);
console.log(users);
console.log(users[1]);

let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: ""}

];

let user1 = users1.find(item => item.id == 4);
let someUsers = users.filter(item => item.id < 2);

console.log(someUsers);

console.log(user1.name);
console.log(users1);
console.log(users1[1]);

/*transform an array
here it returns the lenght of the value
*/


let lengths = ["0", "navya", "false"].map(item => item.length);
console.log(lengths);

let array6 = [ 1, 2, 15 ];
array6.sort();
console.log( array6 );

function compare(a, b) {
  if (a > b) return 1; 
  if (a == b) return 0; 
  if (a < b) return -1;
}
let array7 = [ 1, 2, 15 ];
array7.sort(compare);
console.log(array7);
array7.reverse();
console.log( array7 );

let names = 'navya, kosaraju, index, script';

let array8 = names.split(', ');

for (let name of array8) {
  console.log( `A message to ${name}.` ); 
}

var str = 'navya';
console.log( str.split('') );

// array loops
let fruits1 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i] );
}
let fruits2 = ["Apple", "Orange", "Pear",'false', false, 0];
for(let fruit of fruits2){
  console.log(fruits2);
}

let fruits3 = ["Apple", "Orange", "banana", 'true', true, 0];
for (let key in arr){
  console.log(fruits3);
}

let a1 = [1, 2, 3, 4, 5];

a1.length = 2; // truncate to 2 elements
console.log( a1 ); // [1, 2]

arr.length = 5; // return length back
console.log( a1[3] );

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] );
console.log( matrix[1][3] );

let b = [1, 2, 3];

console.log( b ); 
console.log( String(b) === '1,2,3' );

console.log( [] + 1 ); 
console.log( [1] + 1 ); 
console.log( [1,2] + 1 );
