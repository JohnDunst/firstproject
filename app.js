                                            // Need to set values for player and CPU
let uScore = 0;
let cScore = 0;
window.onload = 
  alert("Best of Seven Series")

                                            // Query selectors
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const sicssorsBtn = document.querySelector(".scissors");
const choiceList = ["rock", "paper", "scissors"];
const resetBtn = document.querySelector(".reset");


userChoice = (rockBtn, paperBtn, sicssorsBtn);
const resultText = document.querySelector(".resultText");
const userSelection = document.querySelector(".userSelection");
const cpuSelection = document.querySelector(".cpuSelection");
//const userWinner = document.querySelector(".chickenDinner");


                                            // CPU RNG

function cpuChoices() {
  random = Math.floor(Math.random() * 3);
  return choiceList[random];
}


                                            // Buttons and clicks
rockBtn.addEventListener("click", (evt) => {
  console.log("rock");
  let choice = cpuChoices();
  console.log(choice);
  var result = winner("rock", choice);

  {
    return (
      (cpuSelection.textContent = choice),
      (userSelection.textContent = "rock")
    );
  }
});
paperBtn.addEventListener("click", (evt) => {
  console.log("paper");
  let choice = cpuChoices();
  console.log(choice);
  var result = winner("paper", choice);
  {
    return (
      (cpuSelection.textContent = choice),
      (userSelection.textContent = "paper")
    );
  }
});
sicssorsBtn.addEventListener("click", (evt) => {
  console.log("sicssors");
  let choice = cpuChoices();
  console.log(choice);
  var result = winner("scissors", choice);

  {
    return (
      (cpuSelection.textContent = choice),
      (userSelection.textContent = "scissors")
    );
  }
});
resetBtn.addEventListener("click", (evt) => {
  location.reload();
});


                                          //logic of the game Win functions
const winner = (userChoice, cpuChoice) => {
  if (userChoice === cpuChoice) {
    console.log("tie");
    {
      return (resultText.textContent = "TIE");
    }
  } else {
    if (userChoice === "rock") {
      if (cpuChoice === "scissors") {
        console.log("you win");
        uScore++;
        updateScores();
        {
          return (resultText.textContent = "User Win!");
        }
      } else {
        //cpuChoice === "paper";
        console.log("cpu win");
        cScore++;
        updateScores();
        {
          return (resultText.textContent = "Cpu Win!");
        }
      }
    } else if (userChoice === "paper") {
      if (cpuChoice === "rock") {
        console.log("you win");
        uScore++;
        updateScores();
        {
          return (resultText.textContent = "User Win!");
        }
      } else {
        //cpuChoice == "scissors";
        console.log("cpu win");
        cScore++;
        updateScores();
        {
          return (resultText.textContent = "Cpu Win!");
        }
      }
    } else if (userChoice === "scissors") {
      if (cpuChoice === "paper") {
        console.log("you win");
        uScore++;
        updateScores();
        {
          return (resultText.textContent = "User Win!");
        }
      } else {
        //cpuChoice == "rock";
        console.log("cpu win");
        cScore++;
        updateScores();
        {
          return (resultText.textContent = "Cpu Win!");
        }
      }
    }
  }
};






                                          //scorekeeper
const updateScores = () => {
  const userScore = document.querySelector(".userScore p");
  const cpuScore = document.querySelector(".cpuScore p");
  userScore.textContent = uScore;
  cpuScore.textContent = cScore;
  if (uScore >=4) {
    alert ("Winner Winner Chicken Dinner!");
      location.reload();

  } 
  
  if 
    (cScore >=4) {

    alert ("NOOB");
    location.reload();
}}

                                              //reload button





                                              // failed ideas
//if (uScore >= 5) {
  //alert("YOU WIN, CONGRATULATIONS!");
  //document.location.reload();
  //clearInterval(interval);
//}
//roundsfunction game()
//const userDinner = () => {
 // if ((uScore = 5)) {
   // {
   //   return (userWinner.textContent = "Match over");
  //  }
 ///   window.alert("Hello! I am an alert box!!");
  //  console.log("Winner einner");
 // }
//};
//resultText.textContent= checkwinner();
