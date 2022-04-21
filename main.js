function computerPlay(){
    let randInt = Math.floor(Math.random()*3);
    if(randInt===0){
        return "Rock"
    } else if (randInt===1){
        return "Paper"
    } else if(randInt===2) {
        return "Scissors"
    }
}
function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()
    let winner = "Computer"
    let message = "Tie!"
    if(player === computer){
        console.log(message)
    } 
    if(player === "rock"){
        if(computer === "paper"){
            winner = "Computer"
            message = "Paper beats Rock!"
        } else if (computer === "scissors"){
            winner = "Player"
            message = "Rock beats Scissors!"
        }
    } else if (player==="paper"){
        if(computer === "scissors"){
            winner=="Computer"
            message="Scissors beats Paper!"
        } else if (computer==="rock"){
            winner="Player"
            message = "Paper beats Rock!"
        }
    } else if (player === "scissors"){
        if(computer==="rock"){
            winner="Computer"
            message = "Rock beats Scissors!"
        } else if(computer==="paper"){
            winner="Player"
            message="Scissors beats Paper!"
        }
    }
    return winner + " wins! " + message

}
function game(){
    
    for(let i = 0; i < 5; i++){
        let playerSelect = prompt("Enter Rock Paper or Scissors")
        playRound(playerSelect,computerPlay())
    }
}


console.log(game())