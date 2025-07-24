console.log("Hello World");

function getComputerChoice() {
  const choix = ["pierre", "papier", "ciseaux"];
  const randomIndex = Math.floor(Math.random() * choix.length);
  return choix[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Faites votre choix : pierre, papier ou ciseaux");
  return choice;
}
console.log("Choix de l'humain :", getHumanChoice());
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("Égalité ! Vous avez tous les deux choisi " + humanChoice);
  } else if (
    (humanChoice === "pierre" && computerChoice === "ciseaux") ||
    (humanChoice === "papier" && computerChoice === "pierre") ||
    (humanChoice === "ciseaux" && computerChoice === "papier")
  ) {
    humanScore++;
    console.log("Vous gagnez ! " + humanChoice + " bat " + computerChoice);
  } else {
    computerScore++;
    console.log("Vous perdez ! " + computerChoice + " bat " + humanChoice);
  }
 console.log(`Score actuel => Humain: ${humanScore} | Ordinateur: ${computerScore}`);
}
const humanSelection = getHumanChoice();      
const computerSelection = getComputerChoice(); 
playRound
