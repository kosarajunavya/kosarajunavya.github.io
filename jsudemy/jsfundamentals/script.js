//values and variables

let country = 'India';
let continent = 'Asia';
let countryPopulation = '136.64 crores';
let continentPopulation = '456.07 crores';

console.log(country + ' population according to 2019 statistics is ' +countryPopulation);
console.log(continent + ' population according to 2019 statistics is ' +countryPopulation);

// let countryPopulation1 = '136.64 crores';
// function changeText(id) {
//   id.innerHTML = countryPopulation1;
// }

// let continentPopulation1 = '456.07 crores';
// function changeText(id) {
//   id.innerHTML = continentPopulation1;
// }

let countryPopulation1 = '136.64 crores';
let continentPopulation1 = '456.07 crores';
document.getElementById("myBtn1").onclick = country1;

function country1() {
    document.getElementById("resultCountry").innerHTML = countryPopulation1;
  }


document.getElementById("myBtn2").onclick = continent1;
function continent1() {
    document.getElementById("resultContinent").innerHTML = continentPopulation1;
  }

// $(document).ready(function(){  
//     $("#myBtn1").click(function(){ 
//         alert('Indian population according to 2019 statistics is 136.64 crores');
//     });  
// });

// $(document).ready(function(){  
//     $("#myBtn2").click(function(){ 
//         alert('Asian population according to 2019 statistics is 456.07 crores');
//     });  
// });

// Data Types

let isIsland = false;
let populationx = 23553;
let language;
console.log(typeof(isIsland));
console.log(typeof(language));
console.log(typeof(country));
console.log(typeof(populationx));
console.log(typeof(null));


    $(document).ready(function(){  
        $(".type").click(function(){ 
            $('.res').text((typeof(isIsland)));
        });  
    });

    $(document).ready(function(){  
        $(".type1").click(function(){ 
            $('.res1').text((typeof(null)));
            alert('actually the return data-type for null should be null but here we will be getting the return data-type as object. So it is a bug from JS yet to be fixed')
        });  
    });

language = 'Hindi';
const apLanguage = 'Telugu';

console.log(language);
console.log(apLanguage);

language = 'Sanskrit';
// apLanguage = 'English';

console.log(language);
console.log(apLanguage);

$(document).ready(function(){  
    $(".a").click(function(){ 
        $('.constResult').text((typeof(apLanguage)));
        $('.reason').text('since I am declared by using const key word. So that I am a constant value and you canot change my value');
    });
});

let eachHalf = parseFloat(countryPopulation)/2;
console.log('total country population is' +countryPopulation );
console.log('each half of the population is '+eachHalf +'crores');

let ctryPopulation = 136.64;
ctryPopulation++;
console.log(ctryPopulation +"crores");

let finlandPopulation = 6;
if (ctryPopulation>finlandPopulation){
    console.log("My country has higgest population")
} else {
    console.log("Finland has higgest population")
}

let avg = 33;
if (ctryPopulation>avg){
    console.log('No, my country has more people than the average country');
}

let description = country +' is in '+continent + ' and its' + countryPopulation + ' people speak Hindi';
console.log(description);

let description1 = `${country} is in ${continent} and its ${countryPopulation} people speak Hindi`;
console.log(description1);

// let populationm = 1366.4;
let populationn = 13;
let avgy = 130 - populationn;
// let avgx = 33 - populationm;
if (avgy > 130){
    console.log("Indian population is above average");
}else {
    console.log('Indian population is below average')
}

var c = '9' - '5';
var d = '19' - '13' + '17';
var e = '19' - '13' + 17;
var f = '123' < 57;
var g =5 + 6 + '4' + 9 - 4 - 2;

console.log(c,d,e,f,g);

//truthy and falsy values

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('navya'));

let money = 100;
if(money){
    console.log('Save it and It will save you');
}else {
    console.log('Get a job to earn money')
}

let hight;
 if (hight){
     console.log('you are 5inch shorter');
 }else{
     console.log('please define your height');
 }

//  let numNeighbours = prompt('How many neighbour countries does your country have?');
//  if (numNeighbours == 1){
//      console.log('Only 1 border!');
//  } else if (numNeighbours>1){
//     console.log('we have ' + numNeighbours +' borders')
//  } else {
//      console.log('No borders');
//  }

//  let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
//  if (numNeighbours === 1){
//      console.log('Only 1 border!');
//  } else if (numNeighbours>1){
//     console.log('we have ' + numNeighbours +' borders')
//  } else {
//      console.log('No borders');
//  }

let languagex = 'english';
let people = '50 million';
let isIslandx = false;
 if(languagex === 'english' && people === '50 million' || isIslandx === true){
     console.log('You should live in Portugal :)');
 }else {
     console.log('Portugal does not meet your criteria :(');
 }

//ternary operator(conditional operator)
 const age = 23;
 age >= 18 ? console.log('you are allowed to take a covid-vaccine'): console.log('Take the preacautions to avoid covid');

 //since ternary opetator is an expression that returns a value so that we are allowed to use in template literal
 age1 = 15;
 console.log(`I like to drink ${age1 >= 18 ? 'wine': 'water'}`);