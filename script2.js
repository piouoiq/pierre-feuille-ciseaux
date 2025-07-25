//1
console.log("Hello World")

//2
function getComputerChoice(){

    let computerChoice=Math.random() //Math.random vas de 0 à 1 donc pour caler 3 valeurs dans Math.random on divise l'interval de 0à1 en 3 parties égales (0 à 0,33 à 0,66 à 1)vu que 1 est exclu on ne le compte pas et pareil pour les tiers donc on ecrit 0,34(exclu) et 0,67(exclu)
 
    if(getComputerChoice){

        if(computerChoice <0.34){
            computerChoice="pierre"
        }
        else if(computerChoice<=0.67){   //on ecrit else if car c'est un deuxieme choix mais pas le choix final
            computerChoice="papier"
        }
        else{
            computerChoice="ciseaux"
        }

    }
return computerChoice
}

console.log(getComputerChoice())

//3

function getHumanChoice(){
    var humanChoice = prompt("Que veux tu?") // se place hors de la fonction sinon ne fonctionne pas 
    console.log(humanChoice)

   }
console.log(getHumanChoice())
