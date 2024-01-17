let randomNumber = parseInt((Math.random()*100)+1);

const form = document.querySelector("form");
const msg = document.querySelector(".lowOrHi");
const prevGuess = document.querySelector(".guesses");
const remGuess = document.querySelector(".lastResult");
const resultParams = document.querySelector(".resultParams");
const userInput = document.getElementById("guessNum");



console.log(randomNumber);
let guesses = [];
let chances = 1;
let playGame = true;

if(playGame){
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inp = parseInt(userInput.value);
    console.log(inp);
    validateGuess(inp);
})}

function validateGuess(inp){
    if(isNaN(inp)){
        alert("Please enter a valid input");
    }
    else if(inp<0 || inp>100){
        alert("Please enter a input within range 1-100");
    }
    else{
        guesses.push(inp);
        if(chances === 11){
            display(inp);
            displayMessage(`Game Over, Random Number is : ${randomNumber}`);
            endGame();
        }
        else{
            display(inp)
            checkGuess(inp);
        }
    }
}
function checkGuess(inp){
    if (inp === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (inp < randomNumber) {
        displayMessage(`randomNumber is too LOW`);
    } else if (inp > randomNumber) {
        displayMessage(`randomNumber is too HIGH`);
    }
}


function display(inp){
    userInput.value = "";
    prevGuess.innerHTML = guesses.join();
    remGuess.innerHTML = `${10 - chances}`;
    chances++;
}

function displayMessage(message){
    msg.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    const b = document.createElement("button");
    playGame = false;
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    b.innerHTML = "Start New Game";
    b.className = "new-gm-btn";
    resultParams.appendChild(b);
    b.addEventListener("click",()=>{
        newGame(b);
    })
}

function newGame(b){
    // console.log("New Game Called");
    playGame = true;
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log("new game rm ",randomNumber);
    guesses = [];
    chances = 1;
    prevGuess.innerHTML = '';
    remGuess.innerHTML = `${11 - chances} `;
    userInput.removeAttribute('disabled');
    resultParams.removeChild(b);
}