let userScore = 0;
let pcScore = 0;
let gamesPlayed = 0;

const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const result_p = document.querySelector(".result > p");
const gamesPlayed_span = document.getElementById("gamesPlayed");

function main() {
    rock_div.addEventListener("click", () => {
        let userChoice = "r";
        gamesPlayed++;
        game(userChoice);
    })

    paper_div.addEventListener("click", () => {
        let userChoice = "p";
        gamesPlayed++;
        game(userChoice);
    })

    scissors_div.addEventListener("click", () => {
        let userChoice = "s";
        gamesPlayed++;
        game(userChoice);
    })
}

main();

function getPcChoice() {
    let options = ["r", "p", "s"];
    let choice = options[Math.floor(Math.random() * 3)];

    return choice;
}

function switchToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    if (letter === "p") {
        return "Paper";
    }
    if (letter === "s") {
        return "Scissors";
    }
}

function win(userChoice, pcChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `User (${switchToWord(userChoice)}) beats PC (${switchToWord(pcChoice)}). You WIN!`;
    gamesPlayed_span.innerHTML = gamesPlayed;
}

function lose(userChoice, pcChoice) {
    pcScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `User (${switchToWord(userChoice)}) loses to PC (${switchToWord(pcChoice)}). You LOSE!`;
    gamesPlayed_span.innerHTML = gamesPlayed;
}

function draw(userChoice, pcChoice) {
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `User (${switchToWord(userChoice)}), PC (${switchToWord(pcChoice)}). It's a DRAW!`;
    gamesPlayed_span.innerHTML = gamesPlayed;
}

function game(userChoice) {
    let pcChoice = getPcChoice();
    let battle = userChoice + pcChoice;

    switch (battle) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, pcChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, pcChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, pcChoice);
            break;
    }
}
