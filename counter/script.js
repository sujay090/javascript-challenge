const number = document.querySelector(".count");
const increesButton = document.querySelector("#incres");
const decreesButton = document.querySelector("#decres");
const resetButton = document.querySelector("#reset");
const iputvalue = document.querySelector("#numberinput");
let increes = 0;
number.textContent = increes;

increesButton.addEventListener("click", () => {
  if (increes < 100) {
  
    let input = Number(iputvalue.value);
    increes += input;
    

    number.textContent = increes;
  }
});

decreesButton.addEventListener("click", () => {
  if (increes != 0) {
    let input = Number(iputvalue.value);  // we can also use the parseInt() function instead but this function also works grate 
    increes -= input;

    number.textContent = increes;
  }
});

resetButton.addEventListener("click", () => {
  number.textContent = 0;
});


