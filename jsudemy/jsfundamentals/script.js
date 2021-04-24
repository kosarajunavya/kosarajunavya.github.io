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

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);