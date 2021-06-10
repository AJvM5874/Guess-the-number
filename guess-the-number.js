let name = prompt("Welkom! Wat is je naam?");
console.log("Hey " + name);

let choiceMin = parseInt(prompt(" Wat is het laagste getal in de range? "));
let choiceMax = parseInt(prompt(" Wat is het hoogste getal in de range? ")); 

let guessNumber = function(){
   return Math.floor(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..."));
 }

let numberToGuess = function (choiceMin, choiceMax){
  return Math.floor((Math.random() * choiceMax) + choiceMin);
}

let checkNumber = function (guess, winningNumber){
  if (winningNumber == guess){
  console.log("Gefeliciteerd je hebt gewonnen!");
 }else {
  console.log("Dat is niet correct!");
  //confirm("wil je nog een keer raden?");
}
}

let GuessTheNumber = function(){
  winningNumber = numberToGuess(choiceMin, choiceMax);
  console.log(winningNumber);
  
  for(let i= 4 ; i >= 0 ; i--){
    console.log("Je hebt nog " + (i+1) + " kansen");
    guess = guessNumber();
    checkNumber(guess, winningNumber);
    if(guess ==  winningNumber){
      return
    };
    if(i > 0){
      confirm("wil je nog een keer raden?");  
    }else{
      console.log("geen pogingen meer over.");
    }
  }
}  
GuessTheNumber();
console.log("Dag " + name + ". Tot de volgende keer.");