let playerScore= 0;
let computerScore =0;
let round=0;

const r="rock";
const p= "paper";
const s= "scissors";

function game(){

    let playerSelection= document.getElementById("weapon").value;
     if(!validateEntry(playerSelection )){return;} 
     //permite jugar hasta 5 rondas
   
     let computerSelection =getComputerChoice();
     //play the game, show the winner o looser
     playround(playerSelection, computerSelection);
    
     //seleccionar ganador
    if(round>=4) {
        selectWinner();
        //deshabilitar boton de play 
         document.getElementById("play").disabled= true;
         return;
    }
      round++;
}
//get random option for the computer
function getComputerChoice(){
    let selection =Math.floor( Math.random() * 3);
    let result="";

    switch(selection){
        case 0:
             result= r;
            break;
        case 1:
            result=p;
            break;
        case 2:
            result=s;
            break;
        default:
            break;
    }
    return  result;
}

function playround(player, computer){
    //determinar quien gano la partida
    if((player.toLowerCase().includes(p) && computer==r) || (player.toLowerCase().includes(s) && computer==p) ||  (player.toLowerCase().includes(r) && computer==s)  ){
        message(player.toLowerCase(), computer.toLowerCase(),true);
        playerScore++;
    }
    if((player.toLowerCase().includes(r) && computer==p) || (player.toLowerCase().includes(p) && computer==s) ||  (player.toLowerCase().includes(s) && computer==r)  ){
        message(player.toLowerCase(), computer.toLowerCase(),false);
        computerScore++;
    }

    if(player.toLowerCase()== computer){
        document.getElementById("result").innerHTML = "It's a tie";
    }
    document.getElementById("machine").value= computer;
    document.getElementById("resultYou").value=playerScore;
    document.getElementById("resultMachine").value=computerScore;
}
//crear mensaje a mostrar
function message(piece1, piece2,won){
    piece1 = piece1.substring(0,1).toUpperCase() + piece1.substring(1,piece1.length).toLowerCase();
    piece2 = piece2.substring(0,1).toUpperCase() + piece2.substring(1,piece2.length).toLowerCase();
    //mostrar resultado de la maquina
    

    if(won){
        document.getElementById("result").innerHTML = "You Won!, " + piece1 + " beats " + piece2;
    }else {
        document.getElementById("result").innerHTML = "You Lose!, " + piece2 + " beats " + piece1;
    }
}

function selectWinner(){
    if(playerScore==computerScore){
        document.getElementById("winner").innerHTML=  "It's a tie";
    }
    else if(playerScore>computerScore){
        document.getElementById("winner").innerHTML= "You WON!";
    }else {
        document.getElementById("winner").innerHTML= "Computer WON!";
    }
    document.getElementById("restart").style.display= "block";
}

function restart(){
    
    round=0;
     playerScore= 0;
     computerScore =0;

     document.getElementById("weapon").value="";
    document.getElementById("machine").value= "";

     document.getElementById("resultYou").value="";
     document.getElementById("resultMachine").value="";

     document.getElementById("result").innerHTML   ="";
     document.getElementById("winner").innerHTML="";
    document.getElementById("restart").style.display= "none";
    document.getElementById("play").disabled= false;

     
     
}
function cleanMachine(){
    document.getElementById("machine").value= "";
    document.getElementById("result").innerHTML   ="";

}

function validateEntry(entry){
    if(entry==""){
        document.getElementById("result").innerHTML   =  "First write your option: Rock, Paper or Scissors!";
       return false;
   }
   if(!entry.toLowerCase().includes(p) && !entry.toLowerCase().includes(s) && !entry.toLowerCase().includes(r)) 
    {
        document.getElementById("result").innerHTML   =  "Make sure you write the correct word!";
        return false;
        
    }
   document.getElementById("result").innerHTML   ="";
   return true;
}