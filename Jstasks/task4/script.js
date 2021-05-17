function calcAge() {
  const getAge = (birthDate) =>
    Math.abs((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  var dob = document.getElementById("myDate").value,
    age = getAge(dob),
    ageInMinutes = age * 525600, //(365*24*60)
    ageInSeconds = ageInMinutes * 60;
  document.getElementById("ageInMinutes").innerHTML =
    "age in minutes :  " + ageInMinutes;
  document.getElementById("ageInSeconds").innerHTML =
    "age in seconds : " + ageInSeconds;
}
