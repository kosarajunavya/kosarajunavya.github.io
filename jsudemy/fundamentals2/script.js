'use strict'

// Activating Strict Mode


let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////

// Functions

function logger() {
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num1 = '23';
console.log(num1);
const num = Number('23');
console.log(num);

// functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and
  its capital city is ${capitalCity}`;
  }
  const descPortugal = describeCountry('Portugal', 10,
  'Lisbon');
  const descGermany = describeCountry('Germany', 83,
  'Berlin');
  const descFinland = describeCountry('Finland', 6,
  'Helsinki');
  console.log(descPortugal, descGermany, descFinland);

// function declaration
  function percentageOfWorld1(population) {
    return (population / 7900) * 100;
  }

    //function expression (best practise)
  const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
  };
  const percPortugal1 = percentageOfWorld1(10);
  const percChina1 = percentageOfWorld1(1441);
  const percUSA1 = percentageOfWorld1(332);
  console.log(percPortugal1, percChina1, percUSA1);


  //arrow function
  const percentageOfWorld3 = population => (population / 7900)
  * 100;
  const percPortugal3 = percentageOfWorld3(10);
  const percChina3 = percentageOfWorld3(1441);
  const percUSA3 = percentageOfWorld3(332);
  console.log(percPortugal3, percChina3, percUSA3);  
// calculating retirement
  const yearsUntilRetairement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement} years`;
  }
  console.log(yearsUntilRetairement(1991, 'jonas'));
  console.log(yearsUntilRetairement(1980, 'mary'));
  
  // function calling another function
  const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million
    people, which is about ${percentage}% of the world.`;
    console.log(description);
    };
    describePopulation('Portugal', 10);
    describePopulation('China', 1441);
    describePopulation('USA', 332);

  //arrays
  const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];
// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');
console.log(friends);
// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift(); // First
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
<<<<<<< HEAD
}
=======
}
>>>>>>> jsrevision
