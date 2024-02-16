import Table from './componente/table/index.js';
import Button from './componente/button/index.js';
import { useState } from 'react';
import './App.css';

const winningPositions = [
  [0,1,2,],
  [3,4,5,],
  [6,7,8,],
  [0,4,8,],
  [0,3,6,],
  [1,4,7,],
  [2,5,8,],
  [2,4,6,],
];

const App = () => {
  const [turn, setTurn] = useState('X')
  const [squares, setSquares] = useState(Array(9).fill(null));

  const checkForWinner = newSquares => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        endGame(newSquares[a], winningPositions[i]);
        return 
      }
    }
    if(!newSquares.includes(null)){
      draw();
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }
  const handleClick = position => {
    let newSquare = [...squares];
    newSquare.splice(position, 1, turn);
    setSquares(newSquare);
    checkForWinner(newSquare);

  }
  const endGame = (result) => {
    let message = result === 'X' ? '¡El jugador X ha ganado!' : '¡El jugador O ha ganado!';
    alert(message);
    setTurn('X');
  }
  const draw = () => {
    alert('Empate');
  }
  const reset = () => {
    setSquares(Array(9).fill(null));
  }
  return (
    <div className="App">
      <Table turn={turn} squares={squares} onClick={handleClick}/>
      
      <Button onClick={reset}/>
    </div>
  );
}

export default App;
