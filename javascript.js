let  selection = [ "Boot", "Cockroach", "Nuclear Bomb" ]

//random computer selection choice
function computerPlay(selection) {
   var index = Math.floor(Math.random() * selection.length);
   return selection[index];
}  

//default values
let playerSelection = "Cockroach";
let playerScore = 0;
let computerScore = 0;

//winner declaration
function playRound (playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      return "Tie!"
   } else if (playerSelection == "Boot" && computerSelection == "Cockroach") {
      return "You win! Boot beats Cockroach"
   } else if (playerSelection == "Boot" && computerSelection == "Nuclear Bomb") {
      return "You lose! Nuclear Bomb beats Boot"
   } else if (playerSelection == "Cockroach" && computerSelection == "Nuclear Bomb") {
      return "You win! Cockroach beats Nuclear Bomb"
   } else if (playerSelection == "Cockroach" && computerSelection == "Boot") {
      return "You lose! Boot beats Cockroach"
   } else if (playerSelection == "Nuclear Bomb" && computerSelection == "Boot") {
      return "You win! Nuclear Bomb beats Boot"
   } else if (playerSelection == "Nuclear Bomb" && computerSelection == "Cockroach") {
      return "You lose! Cockroach beats Nuclear Bomb"
   } else {
      return "Something went horribly wrong!"
   }
} 

//choice declaration & points
function game () {
   let computerSelection = computerPlay(selection);
   console.log("Player choice: " + playerSelection)
   console.log("Computer choice: " + computerSelection)
   if (playerSelection == "Boot" && computerSelection == "Cockroach") {
      playerScore++
   } else if (playerSelection == "Boot" && computerSelection == "Nuclear Bomb") {
      computerScore++
   } else if (playerSelection == "Cockroach" && computerSelection == "Nuclear Bomb") {
      playerScore++
   } else if (playerSelection == "Cockroach" && computerSelection == "Boot") {
      computerScore++
   } else if (playerSelection == "Nuclear Bomb" && computerSelection == "Boot") {
      playerScore++
   } else if (playerSelection == "Nuclear Bomb" && computerSelection == "Cockroach") {
      computerScore++
   } 
   let result = playRound(playerSelection, computerSelection);
   console.log(result);
}   

//five game loop
for (let i=0; i<5; i++) {
      game();
      console.log("Player Score: " + playerScore)
      console.log("Computer Score: " + computerScore)
      console.log("")
   } 
   
//Game terminates after five rounds.
if (i=5) {
   if (playerScore > computerScore) {
      let winner = "Player"
      console.log("Game over, " + winner + " wins!")
   } else if (playerScore < computerScore) {
      let winner = "Computer"
      console.log("Game over, " + winner + " wins!")
  } else {
      console.log("Game over, It's a tie!")
   }
}