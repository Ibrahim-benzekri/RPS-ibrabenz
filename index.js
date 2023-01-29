let computer = document.getElementById("computer");
let player = document.getElementById("player");
let result = document.getElementById("result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sisor = document.getElementById("sisor");

rock.addEventListener("click",playRock);
paper.addEventListener("click",playPaper);
sisor.addEventListener("click",playSisor);




function playRock(){
    let rand = Math.floor((Math.random() * 3 )+ 1);
    let timer = setInterval(f123,1000);
    let i=1;
    function f123(){
        switch(i){
            case 1:
                result.textContent = "Rock...";
                i++;
                break;
            case 2:
                result.textContent = "Rock...Paper...";
                i++;
                break;
            case 3:
                result.textContent = "Rock...Paper...Sisor!";
                i++;
                break;
            default:
                i=1;
            clearInterval(timer);
            switch(rand){
                case 1:
                    computer.textContent = "Computer: rock";
                    player.textContent = "Player: rock ";
                    result.textContent = "Draw!!!";
                    break;
                case 2:
                    computer.textContent = "Computer: paper";
                    player.textContent = "Player: rock ";
                    result.textContent = "You lost :(";
                    break;
                case 3:
                    computer.textContent = "Computer: sisor";
                    player.textContent = "Player: rock ";
                    result.textContent = "You won :)";
                    break;
            }
        }
    }
    
}

function playPaper(){
    let rand = Math.floor((Math.random() * 3 )+ 1);
    let timer = setInterval(f123,1000);
    let i=1;
    function f123(){
        switch(i){
            case 1:
                result.textContent = "Rock...";
                i++;
                break;
            case 2:
                result.textContent = "Rock...Paper...";
                i++;
                break;
            case 3:
                result.textContent = "Rock...Paper...Sisor!";
                i++;
                break;
            default:
                i=1;
            clearInterval(timer);
            switch(rand){
                case 1:
                    computer.textContent = "Computer: rock";
                    player.textContent = "Player: paper ";
                    result.textContent = "You won :)";
                    break;
                case 2:
                    computer.textContent = "Computer: paper";
                    player.textContent = "Player: paper ";
                    result.textContent = "Draw!!!";
                    break;
                case 3:
                    computer.textContent = "Computer: sisor";
                    player.textContent = "Player: paper ";
                    result.textContent = " You lost :(";
                    break;
            }
        }
    }
    
}




function playSisor(){
    let rand = Math.floor((Math.random() * 3 )+ 1);
    let timer = setInterval(f123,1000);
    let i=1;
    function f123(){
        switch(i){
            case 1:
                result.textContent = "Rock...";
                i++;
                break;
            case 2:
                result.textContent = "Rock...Paper...";
                i++;
                break;
            case 3:
                result.textContent = "Rock...Paper...Sisor!";
                i++;
                break;
            default:
                i=1;
            clearInterval(timer);
            switch(rand){
                case 1:
                    computer.textContent = "Computer: rock";
                    player.textContent = "Player: sisor ";
                    result.textContent = "You lost :(";
                    break;
                case 2:
                    computer.textContent = "Computer: paper";
                    player.textContent = "Player: sisor ";
                    result.textContent = "You won :)";
                    break;
                case 3:
                    computer.textContent = "Computer: sisor";
                    player.textContent = "Player: sisor ";
                    result.textContent = " Draw!!!";
                    break;
            }
        }
    }
    
}