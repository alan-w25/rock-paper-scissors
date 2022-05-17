
//selectors 
const choices = document.querySelectorAll("button");

let currentPlayerScore = 0; 
let currentComputerScore = 0; 
console.log(currentPlayerScore)

function disable() {
    choices.forEach(elem => {
        elem.disabled = true
    })
}
function computerPlay(){
    let randInt = Math.floor(Math.random()*3);
    if(randInt == 0){
        return "rock";
    } else if(randInt == 1){
        return "paper";
    } else if(randInt == 2){
        return "scissors";
    } 
}

function playRound(playerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerPlay().toLowerCase();
    let winner = "";
    let message = "";
    let result = "";
    //there is a tie
    if(player === computer){
        
    } 
    if(
        (player=='rock' && computer == 'scissors') ||
        (player == 'paper' && computer=='rock') ||
        (player == 'scissors' && computer == 'paper')
    ) {
        currentPlayerScore+=1; 
        winner = "Player";
        message = player + " beats " + computer;
        console.log(message);

        result = (winner + " wins! " + message 
        + "<br><br>Player Score: " + currentPlayerScore + "<br>Computer Score: " + currentComputerScore);

        if(currentPlayerScore == 5){
            result+= '<br><br>'+winner+" won the game! Reload page to try again.";
            disable();
        }
    } else if (player==computer){
        message = "Tie";
        console.log(message);
        result = (message
            +"<br><br>Player Score: " + currentPlayerScore + "<br>Computer Score: " + currentComputerScore);
    } else {
        currentComputerScore+=1;
        winner = "Computer";
        message = computer + " beats " + player; 
        console.log(message);
        result = (winner + " wins! " + message 
        + "<br><br>Player Score: " + currentPlayerScore + "<br>Computer Score: " + currentComputerScore);
        if(currentComputerScore == 5){
            result+= '<br><br>'+winner+" won the game! Reload page to try again.";
            disable();
        }

    }
        document.getElementById('result').innerHTML = result;
        return;
}
choices.forEach(button =>{
    button.addEventListener('click', ()=>{
        playRound(button.value)
    });
});