const container = document.querySelector(".container");
let currentPlayer = 1;
const takenSquares = [];
let winPositions = [];
const player = document.querySelector('.player');
const winMessage = document.querySelector('#winmessage');
const winContainer = document.querySelector('#wincontainer');
const resetButton = document.querySelector('#resetbutton');

player.textContent = currentPlayer;

resetButton.addEventListener('click', resetGame)

function setupGame() {
    for (let i = 1; i < 65; i++) {

        let square = document.createElement('div');
        square.addEventListener('click', makeMove)
        square.setAttribute('id', [i])

        if (i > 56) {
            square.setAttribute('class', 'taken')
        }

        container.appendChild(square);
    }
}

function makeMove() {
    let isTaken = this.getAttribute('class');
    if (isTaken === 'taken') {
        if (currentPlayer === 1) {
            this.classList.add('p1');
            this.classList.remove('taken');
            currentPlayer = 2;
            player.textContent = currentPlayer;

        } else {
            this.classList.add('p2');
            this.classList.remove('taken')
            currentPlayer = 1;
            player.textContent = currentPlayer;

        }
        if (this.id > 8) {
            let squareTop = document.getElementById(this.id - 8)
            squareTop.classList.add('taken');
        }

        let takenSquare = {
            id: "",
            class: ""
        }
        takenSquare.id = this.id;
        takenSquare.class = this.classList[0];
        takenSquares.push(takenSquare);
        checkWin();
    }
}

function checkWin() {

    let squares = document.querySelectorAll('div');

    for (let i = 0; i < winPositions.length; i++) {
        let square1 = winPositions[i][0]
        let square2 = winPositions[i][1]
        let square3 = winPositions[i][2]
        let square4 = winPositions[i][3]

        if (
            squares[square1].classList.contains('p1') &&
            squares[square2].classList.contains('p1') &&
            squares[square3].classList.contains('p1') &&
            squares[square4].classList.contains('p1')
        ) {
            winContainer.classList.toggle('showwinner')
            winMessage.textContent = 'Player 1 wins!';
            removeListeners(squares);
        } else if (

            squares[square1].classList.contains('p2') &&
            squares[square2].classList.contains('p2') &&
            squares[square3].classList.contains('p2') &&
            squares[square4].classList.contains('p2')

        ) {
            winContainer.classList.toggle('showwinner')
            winMessage.textContent = 'Player 2 wins!';
            removeListeners(squares);
        }
    }
}

function resetGame() {

    winContainer.classList.toggle('showwinner')

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    setupGame();
}

function removeListeners(squares) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', makeMove);
    }
}

function horizontalCheck() {
    for (let i = 1; i < 64; i += 8) {
        for (let y = 0; y < 5; y++) {
            let wincoordinates = [];
            for (let j = 0; j < 4; j++) {
                wincoordinates.push(i + y + j);
            }
            winPositions.push(wincoordinates);
        }
    }
}

function verticalCheck() {
    for (let i = 1; i < 9; i++) {
        for (let y = 0; y < 40; y += 8) {
            let wincoordinates = [];
            for (let j = 0; j < 32; j += 8) {
                wincoordinates.push(i + y + j);
            }
            winPositions.push(wincoordinates);
        }
    }
}

function diagonalCheckOne() {
    for (let i = 1; i < 38; i++) {
        let isDiagnonal = true;
        switch (i) {
            case 6:
            case 7:
            case 8:
            case 14:
            case 15:
            case 16:
            case 22:
            case 23:
            case 24:
            case 30:
            case 31:
            case 32: isDiagnonal = false;
                break;
        }
        if (isDiagnonal) {
            let wincoordinates = [];
            for (let j = 0; j < 28; j += 9) {
                wincoordinates.push(i + j);
            }
            winPositions.push(wincoordinates);
        }
    }
}

function diagonalCheckTwo() {
    for (let i = 4; i < 41; i++) {
        let isDiagnonal = true;
        switch (i) {
            case 9:
            case 10:
            case 11:
            case 17:
            case 18:
            case 19:
            case 25:
            case 26:
            case 27:
            case 33:
            case 34:
            case 35: isDiagnonal = false;
                break;
        }
        if (isDiagnonal) {
            let wincoordinates = [];
            for (let j = 0; j < 28; j += 7) {
                wincoordinates.push(i + j);
            }
            winPositions.push(wincoordinates);
        }
    }
}

diagonalCheckOne();
diagonalCheckTwo();
verticalCheck();
horizontalCheck();

setupGame();



