// Need to set values for player and CPU
let uScore = 0;
let cScore = 0;
//let cpuChoice="";
//let userChoice="";
//start function IE: player click on selection button

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const sicssorsBtn = document.querySelector(".scissors");
const choiceList = ["rock", "paper", "scissors"];
userChoice = (rockBtn, paperBtn, sicssorsBtn);


const updateScores = () =>{
    const userScore = document.querySelector(".userScore p");
    const cpuScore = document.querySelector(".cpuScore p");
    userScore.textContent = uScore;
    cpuScore.textContent = cScore;

};
/*et cpuChoices =
random=(Math.floor(Math.random()*3));
cpuChoice= choiceList[random];*/

function cpuChoices() {
  random = Math.floor(Math.random() * 3);
  return choiceList[random];
}

rockBtn.addEventListener("click", (evt) => {
  console.log("rock");
  let choice = cpuChoices();
  console.log(choice);
  var result = winner("rock", choice);
  //console.log(winner);
});
paperBtn.addEventListener("click", (evt) => {
  console.log("paper");
  let choice = cpuChoices();
  console.log(choice);
  var result = winner("paper", choice);
});
sicssorsBtn.addEventListener("click", (evt) => {
  console.log("sicssors");
  let choice = cpuChoices();
  console.log(choice);
  var result = winner("scissors", choice);
});

//logic of the game similar to my mini project code logic
const winner = (userChoice, cpuChoice) => {
  if (userChoice === cpuChoice) {
    console.log("tie");
  } else {
    if (userChoice === "rock") {
      if (cpuChoice === "scissors") {
        console.log("you win");
        uScore++;
        updateScores();

      } else {
        //cpuChoice === "paper";
        console.log("cpu win");
        cScore++;
        updateScores();

      }
    } else if (userChoice === "paper") {
      if (cpuChoice === "rock") {
        console.log("you win");
        uScore++;
        updateScores();

      } else {
        //cpuChoice == "scissors";
        console.log("cpu win");
        cScore++;
        updateScores();

      }
    } else if (userChoice === "scissors") {
      if (cpuChoice === "paper") {
        console.log("you win");
        uScore++;
        updateScores();

      } else {
        //cpuChoice == "rock";
        console.log("cpu win");
        cScore++;
        updateScores();
      }
    }
  }
};

//reload button
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", (evt) => {
  location.reload();
});
//roundsfunction game() 
