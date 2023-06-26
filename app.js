// Need to set values for player and CPU


//start function IE: player click on selection button
const game = () =>{
const userScore = 0;
const cpuScore=0;




const playgame =() => {
        const rockBtn = document.querySelector ('rock');
        const paperBtn = document.querySelector ('paper');
        const sicssorsBtn = document.querySelector ('scissors');
    
const choiceList = new Array("rock", "paper", "scissors")
    
const cpuChoice=choiceList[Math.ceil(Math.random()*3)]

//logic of the game similar to my mini project code logic
    if (userChoice===cpuChoice){
            return "Tie";

    }else if (userChoice==rock);{
            if(cpuChoice==scissors){
            console.log('you win');
            }else if (cpuChoice==paper);
            console.log('cpu win');
        }
    } 
    if (userChoice==paper);{
            if(cpuChoice==rock)
            console.log('you win');
            else if (cpuChoice==scissors);
            console.log('cpu win');

    if (userChoice==scissors);
            if(cpuChoice==paper)
            console.log('you win');
            else if (cpuChoice==rock);
            console.log('cpu win');
        }
    
    
    
    
    
    
    }














    
// TIES

//reload button

//Display round count

//Display score
