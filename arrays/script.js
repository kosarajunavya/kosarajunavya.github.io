function listAllProperties(o) {
  var objectToInspect = o;     
  var result = [];

  while(objectToInspect !== null) {  
    result = result.concat(Object.getOwnPropertyNames(objectToInspect)); 
    objectToInspect = Object.getPrototypeOf(objectToInspect);
  }

  return result; 
}
console.log(listAllProperties(Number(5)));
function listAllProperties(o) {
	var objectToInspect;
	var result = [];

	for(objectToInspect = o; objectToInspect !== null;
           objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );
    }

	return result;
}
console.log(listAllProperties(Number(5)));

let d = ["Apple", "Orange", "Pear"];

for (let i = d.length; i >= 0; i--) {
  console.log( d[i] );
}

// filter property
var x = [1,-3,-5,3,9,0,11];
var y = x.filter(function(value){
     return value >0;
});
console.log(x);
console.log(y);

// with arrow function
var x1 =[1,-3,-5,3,9,0,11];
var y1 = x1.filter(n => n >=0);
console.log(y1);
this.y1.forEach((element, index) => {
  console.log(index); //I want to get this index
  console.log(element);
});




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
// console.log(fruits[4]);
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
console.log( array2.concat([3, 4]) ); 
console.log( array2.concat([3, 4], [5, 6]) ); 
console.log( array2.concat([3, 4], 5, 6) );

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
console.log(array5.includes(1));

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
let someUsers = users1.filter(item => item.id < 2);

console.log(someUsers);

console.log(user1.name);
console.log(users1);
console.log(users1[1]);

/*transform an array
here it returns the lenght of the value
*/


let lengths = ["0", "navya", "false"].map(item => item.length); //is used to transform each element in to length
console.log(lengths);



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

//

let names = 'navya, kosaraju, index, script';
let array8 = names.split(',');
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
for(let i of fruits2){
  console.log(fruits2);
}

let fruits3 = ["Apple", "Orange", "banana", 'true', true, 0];
for (let key in fruits3){
  console.log(fruits3);
  console.log(key); //we will get keys
  console.log(fruits3[key]); // we will get values
}

let a1 = [1, 2, 3, 4, 5];

a1.length = 2; 
console.log( a1 );
console.log(a1.length);
a1.length = 5; 
console.log( a1[3] );
console.log(a1);
console.log(a1.length);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] );
console.log( matrix[1][3] );

let b = [1, 2, 3];
console.log( b ); 
console.log( String(b) === '1,2,3' ); //converts number in to string


var x1 = [];
x1['a'] = "banana";
x1['0'] = "apple";
x1[0]= "orange";
console.log(x1); //Array [ "orange" ]
console.log(x1.length);  //1
console.log(x1.hasOwnProperty(0)); //true
console.log(x1.hasOwnProperty('0'));//true
console.log(x1.hasOwnProperty('a'));//true

let x9 = new Array();
x9[30]= ['cats'];
console.log(x9);
console.log(x9.length); //31
x9.length = 0;
console.log(x9.length); //changes to empty array

let colorsza = ['red', 'green', 'blue']
for (i in colorsza){
        console.log(colorsza[i]);
}

// to print reverse of array elements in loop
let colorszc = ['red', 'green', 'blue']
for (i in colorszc){
        console.log(colorszc.reverse([i]));
}

//first the declared order is printed and the reverse order is printed
let colorsz = ['red', 'green', 'blue']
for (i in colorsz){
        console.log(colorsz[i]);
}
console.log(colorsz.reverse());

let colorsb = ['red', 'green', 'blue']
colors.forEach(function(colorb) {
  console.log(colorb)
})

//short hand function
let colorsg = ['red', 'green', 'blue']
colorsg.forEach(color => console.log(color))


let myArray = new Array('Wind', 'Rain', 'Fire')
myArray.sort() //applies for numericals also but when mixed data is there then it follows the priority 


// let num = [
//   [1,2,3],
// 	[4,5,6],
// 	[7,8,9]
// ];
// for (i=0; i< num.length; i++){
//   console.log(num[i]);
//   // console.log(num[i][i]); // to print diagonal elements

// for (i in num){
//   console.log(num[i]); //values are printed
// }

// for (i in num){
//   for(j in num[i]){
//     console.log(num[i][j]);
//   }
// }


