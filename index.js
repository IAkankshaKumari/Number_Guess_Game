const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
const paraEl= document.getElementById("para");


input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 8;


checkButton.addEventListener("click", () => {
  
  chance--;
  
  let inputValue = input.value;
 
  if (inputValue == randomNum) {
    
    [guess.textContent, input.disabled] = ["Congratulations 🥳", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "green"];
    setTimeout(()=>{
        window.location.reload();
    },4000);
   
  } else if (inputValue > randomNum && inputValue <= 100) {
    
    [guess.textContent, remainChances.textContent] = ["Try a SMALLER number 🥲", chance];
    guess.style.color = "white";
    
  } else if (inputValue < randomNum && inputValue > 0) {
    
    [guess.textContent, remainChances.textContent] = ["Try A LARGER number 🥲", chance];
    guess.style.color = "white";
   
  } else {
    
    [guess.textContent, remainChances.textContent] = ["Your number is invalid 😑", chance];
    guess.style.color = "red";
  }
  
  if (chance == 0) {
    
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game 😞", "red"];
     paraEl.innerHTML=`Correct Number was ${randomNum} 🐥`;
  }
  if (chance < 0) {
    window.location.reload();
  }
});
