//  we can get the entire head and body of a particular doccument
console.log(document.body.innerHTML);
console.log(document.head.innerHTML);
console.log(document.documentElement.innerHTML);
console.log(document.getElementById("demo").innerHTML ="Number of images: " + document.images.length);
console.log(document.getElementById("demo").innerHTML ="Number of scripts: " + document.scripts.length);
console.log(document.getElementById("demo").innerHTML ="The title of this document is: " + document.title);
console.log(document.getElementById("hi").innerHTML = "is defined here");
var element = document.getElementById("head");
element.innerHTML = "New Heading";
console.log(element);
