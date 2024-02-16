import './index.css';

function Button({ onClick }) {
    return (
        <button className='button' onClick={onClick}>Reset</button>
    )
}
export default Button