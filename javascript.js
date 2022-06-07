
//game logic
function game () {

   //default values
   let playerScore = 0;
   let computerScore = 0;

   let selection = [ "Boot", "Cockroach", "Nuclear Bomb" ]

   //random computer selection choice
   function computerPlay(selection) {
      var index = Math.floor(Math.random() * selection.length);
      return selection[index];
   }  
   
   //player selection
   function play() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
         button.addEventListener('click', () => {
            
            //choice declaration
            let computerSelection = computerPlay(selection);
            let playerSelection = button.textContent;
            console.log("Player choice: " + playerSelection)
            console.log("Computer choice: " + computerSelection)
            
            //score allocation
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
            
            //report scores
            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            console.log("Player Score: " + playerScore)
            console.log("Computer Score: " + computerScore)
            console.log("")

            //endgame
            if (playerScore == 5 || computerScore == 5) {
               if(playerScore == 5) {
                  console.log("Game over, Player wins!")
                  playerScore = 0;
                  computerScore = 0;
               } else {
                  console.log("Game over, Computer wins!")
                  playerScore = 0;
                  computerScore = 0;
               }
               console.log("")
            }           
         });
      });
   }
   
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
   play();
}   
