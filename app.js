// Need to set values for player and CPU
let userScore = 0;
let cpuScore=0;
let cpuChoice=0;

//start function IE: player click on selection button

const rockBtn = document.querySelector ('rock');
const paperBtn = document.querySelector ('paper');
const sicssorsBtn = document.querySelector ('scissors');
const choiceList = ("rock", "paper", "scissors");


function cpuChoices (){
    cpuChoice= choiceList [Math.floor(Math.random()*3)];
    return cpuChoice;
}



    

//logic of the game similar to my mini project code logic
    if (userChoice===cpuChoice){
            return "Tie";

    }else if (userChoice===rock);{
            if(cpuChoice===scissors){
            console.log('you win');
            userScore ++;
            }else if (cpuChoice===paper);
            console.log('cpu win');
            cpuScore++;
        }
     
    if (userChoice===paper);{
            if(cpuChoice===rock){
            console.log('you win');
            userScore ++;
            }else if (cpuChoice==scissors);
            console.log('cpu win');
            cpuScore ++;
        

    if (userChoice===scissors);
            if(cpuChoice===paper)
            console.log('you win');
            else if (cpuChoice==rock);
            console.log('cpu win');
        }
    
    
    
    
    
    
    














    
// TIES

//reload button

//Display round count

//Display score
