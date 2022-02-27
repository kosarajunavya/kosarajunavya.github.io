// array methods that support in all browsers
concat(); //combines two arrays by returning new array
filter(); //return new array as per the filter condition
forEach(); //iterates the array for each element of the array
indexOf(); //gives the index of the element nothing but position
isArray(); //used to check weather the object is array or not
join(); //to join all the elements of an array based on the given characters
lastIndexOf(); //returns the index of specified element by searching from right to left
map(); //iterates over an array with call back function without changing the original
pop(); //returns new array by removing the last element of an array
push(); //returns new array by adding new element at the end of the original array
reduce(); //return single value with the given function(left to right is the default)
reduceRight(); //return single value with the given function(value get roundoff from right to left)
reverse(); //the order of the array values will be reversed
shift(); //removes the first element of an array
slice(); //selected part of the array will be sliced and returned
some(); //booloean method that retuns either true or false based on the given function
sort(); //overwrites the original array by changing their order either ass or des
splice(); //original array will be changed by adding or removing the new elements with splice
toString(); //array can be converted to string
toLocalString(); //representation of language sensitive date
unShift(); //a new element is added at the start of an array, returns new one

//array methods that does not have browser support
at(); // -> IE and Opera
copyWithin(); // ->IE
entries(); // ->IE
fill(); // ->IE
find(); // ->IE
findIndex(); // ->IE
findLAst(); // ->IE, firefox, firefox for android, opera android, nodejs
findLAstIndex(); // ->IE, firefox, firefox for android, opera android, nodejs
flat(); // ->IE
flatMap(); // ->IE
from(); // ->IE
groupBy(); //no browser will support this method
groupByToMap(); //no browser will support this method
includes(); // ->IE
key(); // ->IE
of(); // ->IE
toSource(); //no browser will support this method
values(); // ->IE
[Symbol.iterator](); // ->IE
