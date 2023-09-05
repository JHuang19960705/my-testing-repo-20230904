const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

updateScoreElement();

let isAutoplaying = false;
let intervalId; // 用來停止setInterval()

//const autoPlay = () => {

//};雖然可以arrowFunction但是作者不想要用，理由是原本的比較好閱讀，以及可以Hoisting
function autoPlay() {
    if (!isAutoplaying) {
        intervalId = setInterval(() => {
          const playMove = pickComputerMove();
          playGame(playMove);
      },1000);
      isAutoplaying = true;
    }else {
        clearInterval(intervalId);
        isAutoplaying = false;
    }
};


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));
    
    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-move')
    .innerHTML = `You
    <img src="img/${playerMove}-emoji.png" alt=""
    class="move-icon">
    <img src="img/${computerMove}-emoji.png" alt=""
    class="move-icon">
    Computer
    `;

}


function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = 
        `Wins: ${score.wins}, Lossses: ${score.losses}, Ties: ${score.ties}`;
}



function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}







