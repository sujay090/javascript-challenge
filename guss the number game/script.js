(function () {
  const userInput = document.querySelector(".form");
  const input = document.querySelector(".input");
  const startgame = document.querySelector(".Start-game");
  const submitbtn = document.querySelector(".Submit");
  const optain = document.querySelector(".optain");
  const gussing = document.querySelector(".gussing");
  // function StarPaly(){
  let randomNumber = Math.floor(Math.random() * 100);
  let array = [];
  userInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputData = parseInt(input.value);
    // console.log(inputDa
    // console.log(array);
    if (inputData > randomNumber) {
      optain.textContent = "Too high";
    } else if (inputData < randomNumber) {
      optain.textContent = "Too Low";
    } else {
      optain.textContent = "Congratulations you got it 💖";
      startgame.disabled = false;
      submitbtn.disabled = true;
    }
    array.push(inputData);
    gussing.textContent = `Your Gussing No ${array.join(", ")}`;
    userInput.reset();
  });

  startgame.addEventListener("click", function () {
    optain.textContent = "";
    gussing.textContent = "";
    startgame.disabled = true;
    submitbtn.disabled = false;
    randomNumber = Math.floor(Math.random() * 100);
    array = [];
  });
})();


