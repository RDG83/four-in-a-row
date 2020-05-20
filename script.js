const container = document.querySelector(".container");
let currentPlayer = 1;
const takenSquares = [];
let winPositions = [];

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
        } else {
            this.classList.add('p2');
            this.classList.remove('taken')
            currentPlayer = 1;
        }
        if (this.id > 8) {
            let squareTop = document.getElementById(this.id - 8)
            squareTop.classList.add('taken');
        }
        takenSquares.push(this);
        console.log('after', takenSquares);
        checkWin();
    }
}

function checkWin() {

    winPositions.forEach((position) => {

    }
    )
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

// Function to add diagonal winning posistions to winarray
function diagonalCheck() {
    for (let i = 1; i < 38; i++) {
        let isDiagnonal = true;
        // Switch to exclude the starting positions of 4 in a row lines that go out of bounds
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

diagonalCheck();
verticalCheck();
horizontalCheck();

setupGame();



