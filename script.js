let computerScore = 0;
let playerScore = 0;
let result_ref = document.getElementById("result");
const reloadBtn = document.getElementById("reload");
let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
}
function game(input) {
    var choices = ["rock", "paper", "scissor"];
    var ran = Math.floor(Math.random() * 3);
    document.getElementById("comp_choice").innerHTML =
        ` Computer choose <span> ${choices[ran].toUpperCase()} </span>`;
    document.getElementById("player_choice").innerHTML =
        ` You choose <span> ${input.toUpperCase()} </span>`;
    let computer_choice = choices[ran];
    switch (choices_object[input][computer_choice]) {
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            playerScore++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computerScore++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "TIE";
            break;
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
    document.getElementById("computer_score").innerHTML = computerScore;
    document.getElementById("player_score").innerHTML = playerScore;
}