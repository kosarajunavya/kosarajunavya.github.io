function textLimit(inputType, inputValue) {
  if (inputType.value.length > inputValue) {
    inputType.value = inputType.value.substring(0, inputValue);
    alert("you have crosed the given limit of characters");
  }
}
