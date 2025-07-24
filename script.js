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
<<<<<<< HEAD
console.log("Choix de l'humain :", getHumanChoice());
=======
console.log("Choix de l'humain :", getHumanChoice());
>>>>>>> ef3005d13fb588a4b08d0724d886aba4fcdc486a
