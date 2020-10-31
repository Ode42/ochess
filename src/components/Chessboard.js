import React from 'react';
import Row from './Row';


function Chessboard() {

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const allCells = [];

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            allCells.push(letters[i] + numbers[j])
        }
    }

    console.log(allCells);
    const rows = [];

    for (let i = 1; i < 9; i++) {
        if (i % 2 === 0) {
            rows.push(<Row key={i} even={true} number={i} />);
        } else {
            rows.push(<Row key={i} even={false} number={i} />);
        }
    }
    return (
        <table className="board">
            <tbody>
                {rows}
            </tbody>

        </table>
    );
}

export default Chessboard;
