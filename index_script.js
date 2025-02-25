console.clear();

function getcompchoice() {
    let randnum = Math.floor((Math.random() * 1000000000)) % 3;
    return randnum == 0 ? "Rock"
        : randnum == 1 ? "Paper"
            : randnum == 2 ? "Scissor"
                : "NaRPS";
}

function getuserchoice() {
    let userchoice = null;
    while ((userchoice === null) || (userchoice != "1" && userchoice != "2" && userchoice != "3")) {
        userchoice = prompt("enter your RPS choice\n  - 1 for Rock\n  - 2 for Paper\n  - 3 for Scissor");
    }
    return userchoice == "1" ? "Rock"
        : userchoice == "2" ? "Paper"
            : userchoice == "3" ? "Scissor"
                : "NaRPS";
}

function playRound(compchoice, userchoice) {
    if (userchoice == compchoice) { return "Tie"; }
    else if (userchoice == "Rock") {
        return compchoice == "Paper" ? "comp" : "user";
    }
    else if (userchoice == "Paper") {
        return compchoice == "Scissor" ? "comp" : "user";
    }
    else if (userchoice == "Scissor") {
        return compchoice == "Rock" ? "comp" : "user";
    }
    else { return "one or both choices is NaRPS" }
}
1
// think of below as main entry func like int main() in c++

let userscore = 0;
let compscore = 0;
let whowins = "";
while (userscore < 3 && compscore < 3) {
    whowins = playRound(getcompchoice(), getuserchoice());
    console.log(`${whowins} winned last round`);
    whowins == "comp" ? compscore+=1 : userscore+=1;
    console.log(`comp: ${compscore}\nuser: ${userscore}`);
}
//whowins = userscore>compscore ? "user" : "comp";
console.log(`final winner is ${userscore>compscore ? "user" : "comp"}`);
