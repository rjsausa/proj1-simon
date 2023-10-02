
let sequence = []; // Array to save the computer's sequence of colors
let playerSeq = []; // Array to save the player's sequence of colors
let compTurn; // to track whether it is player's turn or computer's turn

let round; // represents the current round
let flash; // number of flashes 

let correct; // boolen to determine whether player has entered the correct colors
let interval;
let on = false; // to prevent player from clicking on buttons during computer's turn
let win;

// Queryselecting 
const startButton = document.querySelector("#start");
const q1 = document.querySelector("#Q1");
const q2 = document.querySelector("#Q2");
const q3 = document.querySelector("#Q3");
const q4 = document.querySelector("#Q4");
const turnCounter = document.querySelector("#turn");
const gameOver = document.querySelector("#gameOver");
const playAgainBtn = document.querySelector("#accept");

// Function: Start Game (push power button)
startButton.addEventListener('click', (e) => {
    playGame();
});

// Initialize or reset all variables for first round of game
function playGame() {
    win = false;
    sequence = [];
    playerSeq = [];
    flash = 0;
    interval = 0;
    round = 1;
    turnCounter.innerHTML = 1;
    correct = true;
 
    // Create a random sequence of numbers which represents the order that the lights will flash in. This will be the sequence which will be used for the entire game.
    for (let i=0; i < 10; i++) {
        sequence.push(Math.floor(Math.random()*4)+1);
    };
    // console.log(sequence);

    compTurn = true;
    interval = setInterval(flashSequence, 800); // run the flash sequence every 800ms
}

// This function will flash the color in the randomly generated sequence
function flashSequence() {
    on = false;

    if (flash == round) {
        clearInterval(interval);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if(sequence[flash] == 1) 
                 red();
            if(sequence[flash] == 2) 
                 yellow();
            if(sequence[flash] == 3)
                 blue();
            if(sequence[flash] == 4)
                 green();
            
            flash++;
        }, 200); // timeout allows a short gap between flashes (for when the same color comes up consecutively in the sequence)
    }
}


// Functions to flash color and make sound
function red() {
    let audio = document.getElementById("one");
    audio.play();
    q1.style.backgroundColor = "darkred";
}

function yellow() {
    let audio = document.getElementById("two");
    audio.play();
    q2.style.backgroundColor = "goldenrod";
}

function blue() {
    let audio = document.getElementById("three");
    audio.play();
    q3.style.backgroundColor = "darkblue";
}

function green() {
    let audio = document.getElementById("four");
    audio.play();
    q4.style.backgroundColor = "darkgreen";
}

function flashColor() {
    q1.style.backgroundColor = "darkred";
    q2.style.backgroundColor = "goldenrod";
    q3.style.backgroundColor = "darkblue";
    q4.style.backgroundColor = "darkgreen";
}

// Function to return color back 
function clearColor() {
    q1.style.backgroundColor = "#b26969";
    q2.style.backgroundColor = "#b9a676";
    q3.style.backgroundColor = "#434379";
    q4.style.backgroundColor = "#3d623d";    
}

// Function: Capture the button/color that the player pushes and add that to the player array

q1.addEventListener('click', (e) => {
    if (on) {
        playerSeq.push(1);
        checkSeq();
        red();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }        
    }
})

q2.addEventListener('click', (e) => {
    if (on) {
        playerSeq.push(2);
        checkSeq();
        yellow();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }        
    }
})

q3.addEventListener('click', (e) => {
    if (on) {
        playerSeq.push(3);
        checkSeq();
        blue();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }        
    }
})

q4.addEventListener('click', (e) => {
    if (on) {
        playerSeq.push(4);
        checkSeq();
        green();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }        
    }
})

playAgainBtn.addEventListener('click', (e) => {
    gameOver.style.display = "none";
    location.reload();
})

// Check player's array against computer's array
function checkSeq() {
    if (playerSeq[playerSeq.length -1] !== sequence[playerSeq.length - 1]) 
        correct = false;

    if (playerSeq.length == 10 && correct) {
        winGame();
    }

    if (correct == false) {
        loseGame();
    }

    if (round == playerSeq.length && correct && !win) {
    round++;
    playerSeq = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = round;
    interval = setInterval(flashSequence, 800);
}
}

function loseGame() {
    flashColor();
    turnCounter.innerHTML = "XXX";
    let audio = document.getElementById("lose");
    audio.play();
    gameOver.style.display = "block";
    

}

// Player wins when they reach round number 10
function winGame() {
    flashColor();
    turnCounter.innerHTML = "YOU WIN!";
    let audio = document.getElementById("win");
    audio.play();
    on = false;
    win = true;
}
