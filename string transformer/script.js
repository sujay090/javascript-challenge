const inputString = document.querySelector(".input-string");
const lowerCaseInput = document.querySelector(".lowerCase");
const upperCaseInput = document.querySelector(".UpperCase");
const CamelCaseoutput = document.querySelector(".Camel-Case");
const snakeCaseOutput = document.querySelector(".snake-case");
const kababCaseOutput = document.querySelector(".kabab-case");
const spaceTrimOutput = document.querySelector(".space-trim");
const pascaleOutput = document.querySelector(".pascale-case");

inputString.addEventListener("input", function (event) {
  // console.log(inputString.value);
  lowerCaseInput.textContent = inputString.value.toLowerCase();
  upperCaseInput.textContent = inputString.value.toUpperCase();
  CamelCaseoutput.textContent = CamelCasefun(inputString.value);
  pascaleOutput.textContent = pascaleCasefun(inputString.value);
  snakeCaseOutput.textContent = snakeCasefun(inputString.value);
  kababCaseOutput.textContent = kababCasefun(inputString.value);
  spaceTrimOutput.textContent = spaceTrimfun(inputString.value);
});
// console.log(inputString.value);

function CamelCasefun(string) {
  const lower = string.toLowerCase().split(" ");
  // this function convert the string in to the lower case

  // this function split the string into an array of strings
  const finalword = lower.map((word, i) => {
    if (i === 0) {
      // herer we can chake the first character is the lower case and return the lower case
      return word;
    }
    return capitalize(word);
    // this  function capitalize the word
  });
  return finalword.join("");
  // join method using the ki word ke bich me space na raha
}

function snakeCasefun(string) {
  return string.split(" ").join("_");

  // this function split the string into an array of strings
  // then we can join the array with the underscore
}

function kababCasefun(string) {
  return string.split(" ").join("-");
  // this function split the string into an array of strings
  // then we can join the array with the underscore
}

function spaceTrimfun(string) {
  return string.split(" ").join('');
}

function pascaleCasefun(string) {
  const lower = string.toLowerCase().split(" ");
  // this function convert the string in to the lower case

  // this function split the string into an array of strings
  const finalword = lower.map((word) => {
    return capitalize(word);
    // this  function capitalize the word
  });
  return finalword.join("");
  // join method using the ki word ke bich me space na raha
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
  // this function capitalize the first letter of the word and return the capitalize word

  // a jo  slice funtion hai a kaya karta hai ki  word ka bich ki character ko kat data hai
}
