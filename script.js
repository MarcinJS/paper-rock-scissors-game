var computer = {
    name: "computer",
    score: 0,
    pick: ""
};

var player = {
    name: "",
    score: 0,
    pick: ""
};

var round = 0;

var newGame = function() {
    computer.score = 0;
    computer.pick = "";
    player.score = 0;
    player.pick = "";
    round = 0;
    player.name = prompt("What's your name?", "Type your name here");
    document.getElementById("playerName").innerHTML = player.name;
    var buttons = document.getElementsByClassName("pick-button");
        for(var i = 0; i < buttons.length; i++) {
             buttons[i].style.visibility = 'visible'; 
        }
};

function playerPick(pick) {
    player.pick = pick;
    computerPick();
    checkResult();
}

function computerPick() {
    switch (Math.floor(Math.random()*3)) {
        case 0:
        computer.pick = "rock";
        break;        
        case 1:
        computer.pick = "paper";
        break;        
        case 2:
        computer.pick = "scissors";
        break;
    }
}

function checkResult() {
    var gameResult;
    if (player.pick === computer.pick) {
        gameResult = "tie!"; }
    else if (player.pick === "rock") {
            if (computer.pick === "scissors") {
                player.score++; 
                gameResult = "Player wins!"; 
            } else if (computer.pick === "paper") { 
                computer.score++; 
                gameResult = "Computer wins!"; } 
            } else if (player.pick === "paper") {
                if (computer.pick === "rock") {
                    player.score++; gameResult = "Player wins!"; 
                } else if (computer.pick === "scissors") { 
                    computer.score++; 
                    gameResult = "Computer wins!"; } 
            } else if (player.pick === "scissors") { 
                if (computer.pick === "paper") { 
                    player.score++; 
                    gameResult = "Player wins!"; 
                } else if (computer.pick === "rock") { 
                    computer.score++; 
                    gameResult = "Computer wins!"; 
            } 
        }

    document.getElementById("computerPick").innerHTML = computer.pick;
    document.getElementById("playerPick").innerHTML = player.pick;
    document.getElementById("gameResult").innerHTML = gameResult;    
    document.getElementById("playerScore").innerHTML = player.score;
    document.getElementById("computerScore").innerHTML = computer.score;
    
    if ( (player.score >= 10) || (computer.score >=10) ) {
        if (player.score > computer.score) {
            document.getElementById("roundResult").innerHTML = "player wins the game!"; }
        else { document.getElementById("roundResult").innerHTML = "computer wins the game!"; }
        
        var buttons = document.getElementsByClassName("pick-button");
            for(var i = 0; i < buttons.length; i++) {
                buttons[i].style.visibility = 'hidden';
            }
    }
}
