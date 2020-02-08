
const figures = {
        r: {
            text: '&#9820', // ладья
            name: 'rook',
            color: 'black',
        },
        c: {
            text: '&#9822', // конь
            name: 'knight',
            color: 'black',
        },
        b: {
            text: '&#9821', // слон
            name: 'bishop',
            color: 'black',
        },
        q: {
            text: '&#9819', // ферзь
            name: 'queen',
            color: 'black',
        },
        k: {
            text: '&#9818', // король
            name: 'king',
            color: 'black',
        },
        p: {
            text: '&#9823', // пешка
            name: 'pawn',
            color: 'black',
        },
        R: {
            text: '&#9814',
            name: 'rook',
            color: 'white',
        },
        C: {
            text: '&#9816',
            name: 'knight',
            color: 'white',
        },
        B: {
            text: '&#9815',
            name: 'bishop',
            color: 'white',
        },
        Q: {
            text: '&#9813',
            name: 'queen',
            color: 'white',
        },
        K: {
            text: '&#9812',
            name: 'king',
            color: 'white',
        },
        P: {
            text: '&#9817',
            name: 'pawn',
            color: 'white',
        },
};

const positionStart = 'rcbqkbcrpppppppp................................PPPPPPPPRCBQKBCR';

const history = [];

const chessBoard = [
    { active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },
    { active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },
    { active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },
    { active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },
    { active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },
    { active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },
    { active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },
    { active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },{ active: false, figure: null, color: 'black' },{ active: false, figure: null, color: 'white' },
];

function createDiv(classes = []) {
    let result = document.createElement('div');
    classes.forEach((className) => result.classList.add(className));
    return result;
}


function toggleActive(cell, index) {
    if (cell.active) {
        chessBoard[index].active = false;

        createNewChessBord(chessBoard);
        return
    }
        


    let isActiveSomeone = chessBoard.filter(cell => {
        return cell.active
    });

    if (!isActiveSomeone.length) { 

        if (chessBoard[index].figure) chessBoard[index].active = true;
console.log(cell.active);
console.log(index);
        createNewChessBord(chessBoard);
        return
    }
     /* 
        TODO
        
        тут дописать новую логику перемещения
        
        1) на какую ячейку был клик, вы можете это узнать с помощь index (которую в функцию передаем)
        2) она должна стать chessBoard[index].figure

        chessBoard[cellIndex].figure = null;

    */

    console.log('тут вы окажитесь, если на поле есть активная ячейка, а кликнуле не по ней');
}



function getCurrentPosition(chessBoard) {
    let newPosition = chessBoard.map(cell => cell.figure ? cell.figure : '.');
    return newPosition.join('');
}


function createNewChessBord(chessBoard, position) {
    if (!chessBoard) return

    if (!position) {
        position = getCurrentPosition(chessBoard);
    }
    if (false) { //TODO зависит от хода
        history.push(position);
        console.log('--------------------');
        console.log('сейчас идет ', history.length, ' ход');
        console.log('ходит игрок', !history.length%2 + 1);
        console.log('--------------------');
    }

    let container = document.querySelector('.chessboard');
    
    container.innerHTML = '';

    chessBoard.forEach((cell, index) => {

        createCellElement(cell, index, position);
        
    });
}




function createCellElement(cell, index, position) {
    let cellElement = createDiv(['cell', cell.color]);
    let container = document.querySelector('.chessboard');
    
    if (cell.active) cellElement.classList.add('green');

    let nameShortFigure = [...position][index];

    if (!(nameShortFigure == '.')) {
        cellElement.innerHTML = figures[nameShortFigure].text;
        chessBoard[index].figure = nameShortFigure;
    };

    container.append(cellElement);

    cellElement.addEventListener('click', () => {
        toggleActive(cell, index);
    })
}

function startGame() {
    const app = document.querySelector('#app');
    let container = createDiv(['chessboard']);

    app.addEventListener('click', event => {

        if (event.target.classList.value === '') {
            let activeCell = document.querySelector('.green');
            if (activeCell) activeCell.style.background = 'red';
        }
    })

    app.append(container);
    createNewChessBord(chessBoard, positionStart);
}

startGame();




