import React from 'react';
import './board.css';

function Cell(props) {
    let number = undefined;

    switch (props.number) {
        case 1:
            number = 8;
            break;
        case 2:
            number = 7;
            break;
        case 3:
            number = 6;
            break;
        case 4:
            number = 5;
            break;
        case 5:
            number = 4;
            break;
        case 6:
            number = 3;
            break;
        case 7:
            number = 2;
            break;
        case 8:
            number = 1;
            break;
    }

    return (
        <th style={{ backgroundColor: props.color }} className="cell">{props.letter}{number}</th>
    );
}

export default Cell;
