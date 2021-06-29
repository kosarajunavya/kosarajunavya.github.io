function calcAge() {
  const getAge = (birthDate) =>
    Math.abs((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  var dob = document.getElementById("myDate").value,
    age = getAge(dob);
  console.log(age);

  (ageInMinutes = age * 525600), //(365*24*60)
    (ageInSeconds = ageInMinutes * 60);
  document.getElementById("ageInMinutes").innerHTML =
    "age in minutes :  " + ageInMinutes;
  document.getElementById("ageInSeconds").innerHTML =
    "age in seconds : " + ageInSeconds;
}
// $(document).ready(function () {
//   $("#calcAge").on("click", function () {
//     const getAge = (birthDate) =>
//       Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
//     let dob = $("#myDate").val(),
//       age = getAge(dob),
//       currentAge = parseInt(age),
//     (ageInMinutes = age * 525600), //(365*24*60)
//       (ageInSeconds = ageInMinutes * 60);
//     $("#ageInMinutes").html("Age in Minutes " + currentAge);
//     $("#ageInSeconds").html("Age in Seconds " + ageInSeconds);
//   });
// });
