const container = document.querySelector(".container");
let currentPlayer = 1;
const grid = [];

function setupGame() {
    for (let i = 1; i < 65; i++) {

        let square = document.createElement('div');
        square.addEventListener('click', makeMove)
        square.setAttribute('id', [i])
        if (i > 56) {
            square.setAttribute('class', 'taken')
        }
        grid.push(square);
        container.appendChild(square);
    }
}


function makeMove() {
    let isTaken = this.getAttribute('class');
    if (isTaken === 'taken') {
        if (currentPlayer === 1) {
            this.classList.add('p1');
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
        checkWin();
    }
}

// function checkWin() {

//     horizontalCheck()

// }
let winpositions = [];


function horizontalCheck() {

    for (let i = 1; i < 64; i += 8) {

        for (let y = 0; y < 5; y++) {
            let wincoordinates = [];

            for (let j = 0; j < 4; j++) {
                wincoordinates.push(i + y + j);
            }
            winpositions.push(wincoordinates);

        }

        // wincoordinates.push(i);
        // wincoordinates.push(i + 1);
        // wincoordinates.push(i + 2);
        // wincoordinates.push(i + 3);

        // winpositions.push(wincoordinates);


    }
    console.log(winpositions);

}


horizontalCheck();
console.log('winposition:', winpositions)

setupGame();

