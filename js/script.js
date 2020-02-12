{
    function playGame(playerInput) {

        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber)
        printMessage('Komputer wybrał: ' + computerMove);

        function getMoveName(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            } 
        }

        // Choice

        const playerMove = getMoveName(playerInput)

        printMessage('Twój ruch to: ' + playerMove);

        // Display who is winning

        displayResult = function () {

            if (computerMove === 'kamień' && playerMove === 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (computerMove === 'papier' && playerMove === 'nożyce') {
                printMessage('Ty wygrywasz!');
            } else if (computerMove === 'nożyce' && playerMove === 'kamień') {
                printMessage('Ty wygrywasz!');
            }
            else if (computerMove === playerMove) {
                printMessage('Jest remis');
            }
            else {
                printMessage('przegrałeś')
            }
        }
        displayResult(computerMove, playerMove);

    }

    const playRock = document.getElementById('play-rock');
    playRock.addEventListener('click', rock);

    function rock() {
        playGame(1)
    }

    const playPaper = document.getElementById('play-paper');
    playPaper.addEventListener('click', paper);

    function paper() {
        playGame(2)
    }

    const playScissors = document.getElementById('play-scissors');
    playScissors.addEventListener('click', scissors);

    function scissors() {
        playGame(3)
    }
}