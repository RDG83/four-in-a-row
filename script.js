const container = document.querySelector(".container");

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
    console.log(grid);
}


function makeMove() {
    let isTaken = this.getAttribute('class');
    if (isTaken === 'taken') {
        console.log('taken');
    }
}

setupGame();

