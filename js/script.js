function playGame(playerInput) {

    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);


    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    let computerMove = getMoveName(randomNumber)

    printMessage('Komputer wybrał: ' + computerMove);

    // Choice

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    let playerMove = getMoveName(playerInput)


    printMessage('Twój ruch to: ' + playerMove);

    // win condition

    function displayResult(argComputerMove, argPlayerMove) {

        if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove === argPlayerMove) {
            printMessage('Jest remis');
        }
        else {
            printMessage('przegrałeś')
        }
    }

    displayResult(computerMove, playerMove);
}

function rock() {
    playGame(1)
}

let playRock = document.getElementById('play-rock');
playRock.addEventListener('click', rock);

function paper() {
    playGame(2)
}

let playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', paper);

function scissors() {
    playGame(3)
}

let playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', scissors);
