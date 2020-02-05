function chessboard() {
    let newTable = document.createElement( 'table' ),
        lets = [ '', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '' ],

        //blackFigsTxt1 = ['8', 'Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л', '8'],
        //blackFigsTxt2 = ['7', 'п', 'п', 'п', 'п', 'п', 'п', 'п', 'п', '7'],
        //whiteFigsTxt1 = ['1', 'Л (б)', 'К (б)', 'С (б)', 'Ф (б)', 'Кр (б)', 'С (б)', 'К (б)', 'Л (б)', '1'],
        //whiteFigsTxt2 = ['2', 'п (б)', 'п (б)', 'п (б)', 'п (б)', 'п (б)', 'п (б)', 'п (б)', 'п (б)', '2'];

        blackFigs1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
        blackFigs2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],
        whiteFigs1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'],
        whiteFigs2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'];

    for ( let i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        let newTr = newTable.insertRow(i);
        for ( let j = 0; j < 10; j++ ) {
            let newTd = newTr.insertCell( j );
            switch (i) {
                case 0:
                    newTd.innerText = lets[ j ];
                    break;
                case 1:
					//newTd.innerHTML = blackFigsTxt1[ j ];
					newTd.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    //newTd.innerHTML = blackFigsTxt2[ j ];
                    newTd.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    //newTd.innerHTML = whiteFigsTxt2[ j ];
                    newTd.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    //newTd.innerHTML = whiteFigsTxt1[ j ];
                    newTd.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    newTd.innerText = lets[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newTd.innerHTML = a;
                    }
            }
        }
    }
    document.body.appendChild( newTable );
};

chessboard();
let pressed;

window.addEventListener('click', function(event){
	if (event.target.classList !='green' || event.target.classList==''){
		event.target.classList.add('green');
		pressed = false;
	}
	else {
		event.target.classList.remove('green');
		pressed = true;
	}
})

/*
Никак в тему въехать не могу. мучаюсь дальше...

Поздно начал решать. Неуспел. Разобрался только как залить/убрать заливку ячейки при клике.
Не могу понять почему не заливаются белые ячейки, хотя класс добавляется.
Постараюсь разобраться к следующему уроку.

При клике в не поля понимаю что перебором надо заменить класс green на red.
После первого клика при втором клике на других ячейках видимо через проверку переменной ничего не делать если pressed == false (установить при первом клике).

*/