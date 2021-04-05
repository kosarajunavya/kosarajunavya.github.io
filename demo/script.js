function checkAge(age) {
     if (age >= 18 && age <=70) {
        return true;
     }  else {
         return false;
     }
 }
 var age = prompt("How Old Are You?", 18);
 if (checkAge(age)) {
    debugger; 
     console.log("Access Granted");
 } else {
     console.log("Access Denied");
 }