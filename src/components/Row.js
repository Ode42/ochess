// import React and 3rd party components
import React, { useState } from 'react';

//import stylesheets
import './board.css';

// import custom components
import Cell from './Cell';

function Row(props) {

    const cells = [];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const [oddCellColor, setOddCellColor] = useState('');
    const [evenCellColor, setEvenCellColor] = useState('');

    let oddColor = '';
    let evenColor = '';

    if (props.even === true) {
        oddColor = 'rgb(232, 235, 239)';
        evenColor = 'rgb(125, 135, 150)';
    } else {
        oddColor = 'rgb(125, 135, 150)';
        evenColor = 'rgb(232, 235, 239)';

    }

    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            cells.push(<Cell color={evenColor} key={i} letter={letters[i]} number={props.number} />)
        } else {
            cells.push(<Cell color={oddColor} key={i} letter={letters[i]} number={props.number} />)

        }
    }

    return (
        <tr className="row">
            {cells}
        </tr>
    );
}

export default Row;