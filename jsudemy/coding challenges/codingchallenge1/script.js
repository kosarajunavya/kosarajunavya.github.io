

document.getElementById("btn").onclick = function (){
    var a = document.getElementById("userInputm").value;
    var b = document.getElementById("userInputh").value;    		
    // pass the numbers to the average function!
    document.getElementById('bmi1').innerHTML = ((bmi(a,b)));
}
function bmi(a, b) {
    // force the input as numbers *1
    var result1 = ((a*1/ (b*1)**(b*1)));
    return result1; 

}

document.getElementById("btn1").onclick = function (){
        var c = document.getElementById("userInput1m").value;
        var d = document.getElementById("userInput1h").value;    		
    // pass the numbers to the average function!
    document.getElementById('bmi2').innerHTML = ((bmi(c,d)));
}

function bmi1(c, d) {
    // force the input as numbers *1
    var result2 = ((c*1/ (d*1)**(d*1)));
    return result2;
}




// function large(result1,result2){

    
//     if(result1>result2){
//         return 'First person has the larger BMI';
//     }
//     else{
//         return 'Second person has the larger BMI'
//     }
// }

// document.getElementById('res').innerHTML = ((large(result1,result2)));

 