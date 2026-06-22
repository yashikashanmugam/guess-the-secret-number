let secretNumber = 0;
let attempts = 0;

function startGame(){

    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("gamePage").classList.remove("hidden");

    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;

    document.getElementById("message").innerHTML =
    "Start Guessing...";

    document.getElementById("attempts").innerHTML =
    "Attempts: 0 / 5";
}

function checkGuess(){

    let guess =
    Number(document.getElementById("guessInput").value);

    if(!guess){
        document.getElementById("message").innerHTML =
        "⚠ Please enter a number!";
        return;
    }

    attempts++;

    if(guess === secretNumber){

        document.getElementById("message").innerHTML =
        "🎉 Congratulations! You Won!";
        document.getElementById("guessInput").disabled = true;
    }

    else if(guess > secretNumber){

        document.getElementById("message").innerHTML =
        "📈 Too High!";
    }

    else{

        document.getElementById("message").innerHTML =
        "📉 Too Low!";
    }

    document.getElementById("attempts").innerHTML =
    "Attempts: " + attempts + " / 5";

    if(attempts >= 5 && guess !== secretNumber){

        document.getElementById("message").innerHTML =
        "❌ Game Over! Secret Number was " + secretNumber;

        document.getElementById("guessInput").disabled = true;
    }
}

function resetGame(){

    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;

    document.getElementById("message").innerHTML =
    "Start Guessing...";

    document.getElementById("attempts").innerHTML =
    "Attempts: 0 / 5";
}

function exitGame(){

    document.getElementById("gamePage").classList.add("hidden");
    document.getElementById("thankPage").classList.remove("hidden");
}

function backHome(){

    document.getElementById("thankPage").classList.add("hidden");
    document.getElementById("welcomePage").classList.remove("hidden");
}