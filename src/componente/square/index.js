import './index.css';
import classnames from 'classnames';
const Square = ({value, onClick, turn}) =>{
    const handleClick = () =>{
       (turn!== null && value === null) && onClick();
    };
    let squareClass = classnames({
        square: true,
        [`square--${value}`]: value !== null,
    });
    return (
        <div className={squareClass} onClick={() => handleClick()}>

        </div>
    )
}
export default Square