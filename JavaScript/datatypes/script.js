var n = 123;
console.log(n);
n = 12.345;
console.log(n);

console.log(n / 0);
console.log("not a number" / 2);

const bigInt = 8284752070975238797490329973457293n;
console.log(bigInt);

var str = "hello"; //single quotes
var str1 = "good morning"; //double quotes
var str2 = `can embed another ${str1}`; // backticks
console.log(str, str1, str2);
console.log(str2, str, str1);

var name = "navya";
console.log(`hello, ${name}`);

let isGreater = 4 > 1;
console.log(isGreater);

var isGreater1 = 3 > 5;
console.log(isGreater1);

var age = null;
console.log(age);

var age3 = 100;
console.log(age3);
age3 = undefined;
console.log(age3);

var age1;
console.log(age1);

var age2 = "";
console.log(age2);

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "happy");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof console.log);
console.log(typeof console);

// console.clear(); it clears the console

const myBirthday = "16.07.1998";
console.log(myBirthday);
