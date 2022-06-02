let  selection = [ "Boot", "Cockroach", "Nuclear Bomb" ]

function computerPlay(selection) {
   var index = Math.floor(Math.random() * selection.length);
   return selection[index];
}  

let computerSelection = computerPlay(selection);
console.log(computerSelection)

let playerSelection = "Cockroach";

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

let result = playRound(playerSelection, computerSelection);

console.log(result);