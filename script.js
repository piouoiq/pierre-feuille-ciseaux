console.log("Hello World");

function getComputerChoice() {
  const choix = ["pierre", "papier", "ciseaux"];
  const randomIndex = Math.floor(Math.random() * choix.length);
  return choix[randomIndex];
}
