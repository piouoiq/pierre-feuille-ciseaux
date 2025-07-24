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
