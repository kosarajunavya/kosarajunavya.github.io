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
console.log( array4.concat(arrayLike2) )