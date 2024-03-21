const tablero = document.getElementById('tablero')

const BOARD_WIDTH = 10
const BOARD_HEIGTH = 20

const cellMatrix = []
const cellColor = '#8b8b8b'


for (let i = 0; i < BOARD_HEIGTH; i++) {
    const row = []

    for (let o = 0; o < BOARD_WIDTH; o++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        tablero.appendChild(cell)

        row.push(cell)
    }

    cellMatrix.push(row)
}

let x = 0
let y = 0



const FIGURES = [
    [0, 1, 0],
    [1, 1, 1],
]


function draw() {
    FIGURES.forEach((row, _y) => {
        row.forEach((piece, _x) => {
            if (piece === 1)
                cellMatrix[_y +y][_x+x].style.backgroundColor = 'red'
        })
    })
}

function clean() {
    FIGURES.forEach((row, _y) => {
        row.forEach((piece, _x) => {
            if (piece === 1)
                cellMatrix[_y +y][_x+x].style.backgroundColor = cellColor
        })
    })
}

function update() {
    clean()
    y++;
    draw()
}

window.setInterval(update, 1000)

window.addEventListener('keydown', () => {
    update()
})        