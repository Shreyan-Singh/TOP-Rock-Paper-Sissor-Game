
const divScore = document.getElementById('score');
    const divComChoice = document.createElement("div");
    const divChoseAgain = document.createElement("div");
    divComChoice.style.cssText="font-size:large; color:red;";
    divChoseAgain.style.cssText="font-size:large; color:blue;";

    divScore.appendChild(divComChoice);


window.playerScore=0;
    window.computerScore=0;
window.count=1;

function reset(){
    divChoseAgain.textContent = "";

window.playerScore=0;
    window.computerScore=0;
window.count=0;
const Win=document.getElementById('winner');
            Win.textContent="";
}

function getComputerChoice(){
    let computerChoice;
    let choices=["rock","paper","sissor"];
    computerChoice=choices[Math.floor(Math.random()*3)];
    return computerChoice;
}
const onClick = (event) => {
    
    
    const playerSelection=(event.target.textContent).toLowerCase();
    const computerSelection=getComputerChoice();
    divComChoice.textContent="Computer choose:"+computerSelection;

    

    console.log(count);
    if(count<=5){
    divScore.appendChild(divChoseAgain);

    playRound(playerSelection,computerSelection);
    
   
}
  }
  
  addEventListener('click', onClick);
   

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
    divChoseAgain.textContent = "Make your Choice again";


    const round=document.getElementById('round');
    round.textContent="Round:"+count;
    
    const yourScore=document.getElementById('yourScore');
    yourScore.textContent=playerScore;

    const computerP=document.getElementById('computerScore');
    computerP.textContent=computerScore;

    if(count===5){
    divChoseAgain.textContent = "";


        if(playerScore>computerScore){
            const playerWin=document.getElementById('winner');
            playerWin.textContent="You Won";
        }
        if(playerScore<computerScore){
            const computerWin=document.getElementById('winner');
            computerWin.textContent="Computer Won";
        }
        if(playerScore===computerScore){
            const Win=document.getElementById('winner');
            Win.textContent="Draw. You and Computer have same score.";
        }
    }
    count=count+1;

}
/*
//this staets the game
function game(){
    window.playerScore=0;
    window.computerScore=0;
    for(let i=0; i<5; i++){
        
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
*/

