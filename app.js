                                      // Need to set values for player and CPU
let uScore = 0;
let cScore = 0;

                                        //start function const setups

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const sicssorsBtn = document.querySelector(".scissors");
const choiceList = ["rock", "paper", "scissors"];
userChoice = (rockBtn, paperBtn, sicssorsBtn);
const resultText = document.querySelector(".resultText");
const userSelection = document.querySelector(".userSelection");
const cpuSelection = document.querySelector(".cpuSelection");
const userWinner= document.querySelector(".chickenDinner");


function cpuChoices() {
  random = Math.floor(Math.random() * 3);
  return choiceList[random];






}
rockBtn.addEventListener("click", (evt) => {
  console.log("rock");
  let choice = cpuChoices();
  console.log(choice);
  var result = winner("rock", choice);

  {
    return (
      (cpuSelection.textContent = `${choice}`),
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
      (cpuSelection.textContent = `${choice}`),
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
      (cpuSelection.textContent = `${choice}`),
      (userSelection.textContent = "scissors")
    );
  }
});




//logic of the game similar to my mini project code logic
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
          return (resultText.textContent = "UserWin!");
        }
      } else {
        //cpuChoice === "paper";
        console.log("cpu win");
        cScore++;
        updateScores();
        {
          return (resultText.textContent = "CPUWIN");
        }
      }
    } else if (userChoice === "paper") {
      if (cpuChoice === "rock") {
        console.log("you win");
        uScore++;
        updateScores();
        {
          return (resultText.textContent = "UserWin!");
        }
      } else {
        //cpuChoice == "scissors";
        console.log("cpu win");
        cScore++;
        updateScores();
        {
          return (resultText.textContent = "CPUWIN");
        }
      }
    } else if (userChoice === "scissors") {
      if (cpuChoice === "paper") {
        console.log("you win");
        uScore++;
        updateScores();
        {
          return (resultText.textContent = "UserWin!");
        }
      } else {
        //cpuChoice == "rock";
        console.log("cpu win");
        cScore++;
        updateScores();
        {
          return (resultText.textContent = "CPUWIN");
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
  if (uScore >= 5) 
    {
      return (userWinner.textContent = "ChickenDinner!");
    }
      else {  (cpuScore >=5)
      
        return (userWinner.textContent = "You SUCK!");

      }
};






                  //reload button
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", (evt) => {
  location.reload();
});





                                //roundsfunction game()
const userDinner = () => {
  if ((uScore = 5)) {
    {
      return (userWinner.textContent = "Match over");
    }
    window.alert("Hello! I am an alert box!!");
    console.log("Winner einner");
  }
};
//resultText.textContent= checkwinner();
