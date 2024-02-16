import './index.css';
import Square from '../square/index.js';

const Table = ({ squares, onClick, turn }) => {
    return (
        <div className='board'>
            <div className='row1'>
                {[0, 1, 2].map(position =>
                    <Square
                        turn={turn}
                        onClick={() => onClick(position)}
                        value={squares[position]}
                        key={`square_${position}`}
                    />)}
            </div>
            <div className='row2'>
                {[3, 4, 5].map(position =>
                    <Square
                        turn={turn}
                        onClick={() => onClick(position)}
                        value={squares[position]}
                        key={`square_${position}`}
                    />)}

            </div>
            <div className='row3'>
                {[6, 7, 8].map(position =>
                    <Square
                        turn={turn}
                        onClick={() => onClick(position)}
                        value={squares[position]}
                        key={`square_${position}`}
                    />)}
            </div>
        </div>
    )
}
export default Table;

