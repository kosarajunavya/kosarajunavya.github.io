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