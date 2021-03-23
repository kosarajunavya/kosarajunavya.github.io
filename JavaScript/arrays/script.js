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


