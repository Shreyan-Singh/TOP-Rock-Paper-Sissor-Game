

function getComputerChoice(){
    let computerChoice;
    let choices=["rock","paper","sissor"];
    computerChoice=choices[Math.floor(Math.random()*3)];
    return computerChoice;
}
function playRound(playerSelection,computerSelection){

    if(playerSelection===computerSelection){
        console.log("daw");
        playerScore=playerScore+0;
        computerScore=computerScore+0;
    }
    if(playerSelection==="rock" && computerSelection==="sissor"){
        console.log("you won."+" you selected "+playerSelection+" computer selected "+computerSelection);
        playerScore=playerScore+1;
        computerScore=computerScore+0;
    }
    if(playerSelection==="rock" && computerSelection==="paper"){
        console.log("you lose."+" you selected "+playerSelection+" computer selected "+computerSelection);
        playerScore=playerScore+0;
        computerScore=computerScore+1;

    }
    if(playerSelection==="paper" && computerSelection==="sissor"){
        console.log("you won."+" you selected "+playerSelection+" computer selected "+computerSelection);
        playerScore=playerScore+1;
        computerScore=computerScore+0;
    }
    if(playerSelection==="paper" && computerSelection==="rock"){
        console.log("you lose."+" you selected "+playerSelection+" computer selected "+computerSelection);
        playerScore=playerScore+0;
        computerScore=computerScore+1;

    }
    if(playerSelection==="sissor" && computerSelection==="rock"){
        console.log("you lose."+" you selected "+playerSelection+" computer selected "+computerSelection);
        playerScore=playerScore+0;
        computerScore=computerScore+1;
    }
    if(playerSelection==="sissor" && computerSelection==="paper"){
        console.log("you won."+" you selected "+playerSelection+" computer selected "+computerSelection);
        playerScore=playerScore+1;
        computerScore=computerScore+0;
    }
    
}
//this staets the game
function game(){
    window.playerScore=0;
    window.computerScore=0;
    for(let i=0; i<5; i++){
        const playerSelection=prompt().toLocaleLowerCase();
        const computerSelection=getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if(playerScore===computerScore){
        console.log("play again"+" your score = "+playerScore+" & computer score = "+computerScore);
    }
    if(playerScore>computerScore){
        console.log("you won"+" your score = "+playerScore+" & computer score = "+computerScore);
    }
    if(playerScore<computerScore){
        console.log("computer won"+" your score = "+playerScore+" & computer score = "+computerScore);
    }
    

}

