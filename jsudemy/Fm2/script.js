'use strict'

// Activating Strict Mode


// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');
// // const interface = 'Audio';
// // const private = 534;

// ///////////////////////////////////////

// // Functions

// function logger() {
//   console.log('My name is Jonas');
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const num1 = '23';
// console.log(num1);
// const num = Number('23');
// console.log(num);

// // functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and
//   its capital city is ${capitalCity}`;
//   }
//   const descPortugal = describeCountry('Portugal', 10,
//   'Lisbon');
//   const descGermany = describeCountry('Germany', 83,
//   'Berlin');
//   const descFinland = describeCountry('Finland', 6,
//   'Helsinki');
//   console.log(descPortugal, descGermany, descFinland);

// // function declaration
//   function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
//   }

//     //function expression (best practise)
//   const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
//   };
//   const percPortugal1 = percentageOfWorld1(10);
//   const percChina1 = percentageOfWorld1(1441);
//   const percUSA1 = percentageOfWorld1(332);
//   console.log(percPortugal1, percChina1, percUSA1);


//   //arrow function
//   const percentageOfWorld3 = population => (population / 7900)
//   * 100;
//   const percPortugal3 = percentageOfWorld3(10);
//   const percChina3 = percentageOfWorld3(1441);
//   const percUSA3 = percentageOfWorld3(332);
//   console.log(percPortugal3, percChina3, percUSA3);  
// // calculating retirement
//   const yearsUntilRetairement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65-age;
//     return `${firstName} retires in ${retirement} years`;
//   }
//   console.log(yearsUntilRetairement(1991, 'jonas'));
//   console.log(yearsUntilRetairement(1980, 'mary'));
  
//   // function calling another function
//   const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million
//     people, which is about ${percentage}% of the world.`;
//     console.log(description);
//     };
//     describePopulation('Portugal', 10);
//     describePopulation('China', 1441);
//     describePopulation('USA', 332);

//   //arrays
//   const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas[4]);
// console.log(jonas);
// console.log(jonas.length);
// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// // Basic Array Operations (Methods)
// const friendsx = ['Michael', 'Steven', 'Peter'];
// // Add elements
// const newLength = friendsx.push('Jay');
// console.log(friendsx);
// console.log(newLength);
// friendsx.unshift('John');
// console.log(friends);
// // Remove elements
// friendsx.pop(); // Last
// const popped = friendsx.pop();
// console.log(popped);
// console.log(friendsx);
// friendsx.shift(); // First
// console.log(friendsx);
// console.log(friendsx.indexOf('Steven'));
// console.log(friendsx.indexOf('Bob'));
// friendsx.push(23);
// console.log(friendsx.includes('Steven'));
// console.log(friendsx.includes('Bob'));
// console.log(friendsx.includes(23));
// if (friendsx.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

//objects
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);
const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// console.log(jonas.'last' + nameKey)
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Object Methods
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));
// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// Iteration: The for Loop
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist
for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}



