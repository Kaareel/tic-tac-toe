import './index.css';

const Square = ({ value, onClick, turn }) => {
    const handleClick = () => {
        (turn !== null && value === null) && onClick();
    };

    const className = `square${!value ? '' : (value === 'X' ? '--X' : '--O')}`;

    return (
        <div className={className} onClick={() => handleClick()} />
    )
}
export default Square