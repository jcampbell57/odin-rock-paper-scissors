console.log("Hello world!");

let  selection = [ "Boot", "Cockroach", "Nuclear Bomb" ]

function computerPlay(selection) {
   var index = Math.floor(Math.random() * selection.length);
   return selection[index];
}  

console.log(computerPlay(selection));