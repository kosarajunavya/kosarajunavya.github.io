function count() {
  var userInput = document.getElementById("user-input").value,
    numberOfWords = countWords(userInput),
    numberOfChars = userInput.length,
    spaceCount = userInput.split(" ").length - 1;

  document.getElementById("numberOfWords").innerHTML =
    "Number of words: " + numberOfWords;
  document.getElementById("numberOfChars").innerHTML =
    "Number of Chars: " + numberOfChars;
  document.getElementById("spaceCount").innerHTML =
    "Number of Spaces: " + spaceCount;
}
function countWords(string) {
  string = string.replace(/(^\s*)|(\s*$)/gi, "");
  string = string.replace(/[ ]{2,}/gi, " ");
  string = string.replace(/\n /, "\n");
  return string.split(" ").length;
}
