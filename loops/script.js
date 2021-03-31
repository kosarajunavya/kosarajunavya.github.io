var a = 3;
var b = -2;
if(a && b == true){
    console.log("both the variables are same"); 
} else{
    console.log("both are distinct variables");
}

var x1 = 'name';
y1 = '3';
if (x1 == 'name' || y1 == 3){
    console.log("return value is true")
} else {
    console.log("return value is false")
}

var x=10;
var y=5;
if (x>y){
    z=x+y;
    console.log(z);
}else{
    z=x*y;
    console.log(z);
}

let c=4, d=9, e=9;
if (c>d){
    k=c+d;
    console.log(k);
}else if (d>e){
    k=d+e;
    console.log(k);
}
else{
    k=c+e;
    console.log(k);
} 

var b = new Boolean(true);
if (b == 1){
    console.log("value is boolean")
}else{
    console.log("value is string")

}

var b1 = new Boolean(false);
if (b1 == "false"){
console.log("value is boolean");
}else{
    console.log("value is not boolean")
}
console.log(typeof(b1));


var fruittype = "Bananas";
// var fruittype = "Mangoes";
switch (fruittype) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
     console.log(`Sorry, we are out of ${fruittype}.`);
  }
  console.log("Is there anything else you'd like?");

var m = [1,2,3,4,5,6];
for(let i=0;i<m.length;i++){
    console.log(i);
    console.log(i,m[i]);
}



 
  