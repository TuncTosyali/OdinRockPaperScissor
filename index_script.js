//console.clear();

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");
const result = document.querySelector("#result");
const allButtons = document.querySelectorAll("button");
allButtons.forEach(function (singleButton) {
    singleButton.addEventListener("click", playRound);
});
let userScore = 0;
let compScore = 0;
let tieScore=0;

function getcompchoice() {
    let randnum = Math.floor((Math.random() * 1000000000)) % 3;
    return randnum == 0 ? "Rock"
        : randnum == 1 ? "Paper"
            : randnum == 2 ? "Scissor"
                : "NaRPS";
}

function playRound(e) {
    let compchoice = getcompchoice();
    let userchoice = e.target.textContent;
    let roundWinner = "";

    if (userchoice == compchoice) { roundWinner = "Tie"; }
    else if (userchoice == "Rock") {
        roundWinner = (compchoice == "Paper" ? "comp" : "user");
    }
    else if (userchoice == "Paper") {
        roundWinner = (compchoice == "Scissor" ? "comp" : "user");
    }
    else if (userchoice == "Scissor") {
        roundWinner = (compchoice == "Rock" ? "comp" : "user");
    }
    else { roundWinner = "one or both choices is NaRPS" }
    if (roundWinner == "user") userScore++;
    else if (roundWinner == "comp")compScore++;
    else tieScore++;
    result.innerHTML = `userchoice: ${userchoice} | compchoice: ${compchoice}<br>
                        roundWinner is ${roundWinner}<br>
                        <br>
                        Overall score<br>
                        userScore: ${userScore} | compScore: ${compScore} | tieScore: ${tieScore}`;
}
