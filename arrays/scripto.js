let user = {     
    name: "John",  
    age: 30        
};
console.log(user);
console.log(user.name);
console.log(user.age);
user.age = 45;
console.log(user.age);

// console.log(delete user.name);
// console.log(delete user.admin); for both this statements it returns true

var a = delete user.name;
console.log(a);
console.log(user);

// to declare multiword property specify in quotes

let user1 = {
    name: "John",
    age: 30,
    "likes birds": true 
};
console.log(user1);
// accessing of user.likes birds will return syntactical error
// console.log(user.likes birds);
user1["likes birds"] = true;
console.log(user1["likes birds"]); 
console.log(delete user1["likes birds"]);

let key = "likes birds";
console.log(user1[key] = 'hello');

function makeUsern(name, age) {
    return {
      name: name,
      age: age,
    };
}
  
let usern = makeUsern("John", 30);
console.log(usern.name);

function user3(name, age, qualification){
    return{
        name,
        age,
        qualification
    };
}
let res = user3('navya', 22, 'B.tech')
console.log(res);
console.log(res.name);

let obj = {
    for: 1,
    let: 2,
    return: 3
};
  
console.log(obj.for + obj.let + obj.return );

let obj3 = {
    for: "1",
    let: "2",
    return: "3"
};
  
console.log(obj3.for + obj3.let + obj3.return );


let obj2 = {
    for: "navya",
    let: "alexa",
    return: "siri"
};
  
console.log(obj2.for + obj2.let + obj2.return );

let obj1 = {
    0: "test" 
};

console.log( obj1["0"] ); 
console.log( obj1[0] );


let user4 = {
    for: 1,
    let: 2,
    return: 3,
    name: "navya",
    age: 22

};
console.log( user4.return === undefined );
console.log( user4.noSuchProperty === undefined );

console.log("let" in user4);
console.log("miss" in user4);

let key2 = "kosaraju";

console.log(name in user4);
console.log(key2 in user4);
console.log(key2);
console.log(user4.name);

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
  
for (let code in codes) {
console.log(code); 
}
console.log(codes); 

console.log( String(Math.trunc(Number("49"))) ); 
console.log( String(Math.trunc(Number("+49"))) ); 
console.log( String(Math.trunc(Number("1.2"))) );


let user5 = {
    name: "John",
    surname: "Smith"
};
  user5.age = 25;
    for (let prop in user5) {
    console.log( prop ); //gives the property name
}
	console.log(user5);
	console.log(user5.name);


let user2 = {
    name: "John",
    age: 30,
    job: 'trainer'
};
  
let key1 = prompt("What do you want to know about the user?", user2);
console.log( user2[key1] );

let fruit = prompt("Which fruit to buy?", "apple");
  let bag = {
    [fruit]: 10, 
  };
console.log( bag.apple );



let fruit1 = prompt("Which fruit to buy?", "apple");
let bag1 = {};
console.log(bag1[fruit1] = 5); 

let fruit2 = 'apple';
let bag2 = {
  [fruit2 + 'Computers']: 5 
};
//********************************************************** */
// copying an object means that only the reference of an object is copied but not the object itself duplicated
let user6 = { name: "John" };
let admin = user6; 
console.log(user6);
console.log(admin);

let user7 = { name: 'John' };
let admin1 = user7;
console.log(admin1.name);
console.log(user7.name);
admin1.name = 'juice';
console.log(user7.name);
console.log(admin1.name);

// comparision by reference

let a1 = {};
let b = a1; 
let c={};
let d={};
console.log( a1 == b );
console.log( a1 === b );
console.log( c == d );
console.log( c === d );

let user8 = {
    name: "John",
    age: 30
};
  
  let clone = {}; 
  
  for (let key in user8) {
    clone[key] = user8[key];
}
  
clone.name = "Pete"; 
console.log( user8);
console.log( clone);

// copying multiple objects with  assign
var info = {
    name: 'navya',
    age: 22
}
var doc = {
    doctype: 'resume'
}
var pic = {
    photo:'photo'
}
var form = Object.assign(info, doc,pic);
console.log(form);

// to overwrite the copied object value

Object.assign(info, {name: "kosaraju"});
console.log(info);
// a simple method used to copy all the elements and it is an alternate method for..in loop
let info1 = Object.assign({}, info);


var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);

function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
}
console.log(myCar.hasOwnProperty('make'));
console.log(myCar.hasOwnProperty('value'));
var main = {}
main['number'] = 4;
main['name'] = 'john';
main['is married']= true;
main['kids'] = ['ben','kevin'];
console.log(main);
console.log(main['kids']);

function displayCar1(make, model, year){
    var result = "A beatuful "+ "make:"+ make + "  model:" + model + "  year:" + year;
   console.log(result);
}
displayCar1("bnm","456","1999");

function displayCar1(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    
    var result = `A Beautiful ${this.make} ${this.model} ${this.year}`;
    console.log(result);
}

displayCar1("hundai","vernaa",2000);