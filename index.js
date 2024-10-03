// initilizing some value 
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;

// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = document.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMesage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");



form.addEventListener("submit", function(event){
  event.preventDefault();
  // console.log(guessingNumber.value);
  checkResult(guessingNumber.value);
})

function checkResult(guessingNumber) {
  // console.log(guessingNumber);
  const randomNumber = getRandomNumber(5);
  // console.log(randomNumber);
  if(guessingNumber === randomNumber){
  resultText.innerHTML = `you have won`;
  totalWons++;
  }else{
  resultText.innerHTML = `yo have lost; Random number was: ${randomNumber}`;
  totallosts++;
  }
  lostWonMesage.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
  lostWonMesage.classList.add("large-text");
  cardBody.appendChild(lostWonMesage);

}


function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) +1;
}

