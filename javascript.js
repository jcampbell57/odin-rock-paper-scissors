
//game logic
function game () {

   //default values and document elements
   let playerScore = 0;
   let computerScore = 0;
   let player = document.querySelector('.player')
   let computer = document.querySelector('.computer')
   let pscore = document.querySelector('.pscore')
   let cscore = document.querySelector('.cscore')
   let resultDisplay = document.querySelector('.result')
   let gameOver = document.querySelector('.gameOver')

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
            
            //reset score
            gameOver.style.color = 'black';
            gameOver.textContent = 'Choose again!';

            //choice declaration
            let computerSelection = computerPlay(selection);
            let playerSelection = button.textContent;
            
            console.log("Player choice: " + playerSelection)
            player.textContent = `Player selection: ${playerSelection}`;
            console.log("Computer choice: " + computerSelection)
            computer.textContent = `Computer selection: ${computerSelection}`;
            

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
            resultDisplay.textContent = `${result}`
            console.log("Player Score: " + playerScore)
            pscore.textContent = `Player: ${playerScore}`;
            console.log("Computer Score: " + computerScore)
            cscore.textContent = `Computer: ${computerScore}`;
            console.log("")

            //endgame
            if (playerScore == 5 || computerScore == 5) {
               if(playerScore == 5) {
                  console.log("Game over, Player wins!")
                  gameOver.style.color = 'green';
                  gameOver.textContent = 'Game over, Player wins!';
                  playerScore = 0;
                  computerScore = 0;
               } else {
                  console.log("Game over, Computer wins!")
                  gameOver.style.color = 'red';
                  gameOver.textContent = 'Game over, Player wins!';
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
         resultDisplay.style.color = 'black';
         return "Tie!"
      } else if (playerSelection == "Boot" && computerSelection == "Cockroach") {
         resultDisplay.style.color = 'green';
         return "You win! Boot beats Cockroach"
      } else if (playerSelection == "Boot" && computerSelection == "Nuclear Bomb") {
         resultDisplay.style.color = 'red';
         return "You lose! Nuclear Bomb beats Boot"
      } else if (playerSelection == "Cockroach" && computerSelection == "Nuclear Bomb") {
         resultDisplay.style.color = 'green';
         return "You win! Cockroach beats Nuclear Bomb"
      } else if (playerSelection == "Cockroach" && computerSelection == "Boot") {
         resultDisplay.style.color = 'red';
         return "You lose! Boot beats Cockroach"
      } else if (playerSelection == "Nuclear Bomb" && computerSelection == "Boot") {
         resultDisplay.style.color = 'green';
         return "You win! Nuclear Bomb beats Boot"
      } else if (playerSelection == "Nuclear Bomb" && computerSelection == "Cockroach") {
         resultDisplay.style.color = 'red';
         return "You lose! Cockroach beats Nuclear Bomb"
      } else {
         resultDisplay.style.color = 'black';
         return "Something went horribly wrong!"
      }
   } 
   play();
}   

game();