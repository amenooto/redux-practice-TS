import React from 'react';
import './App.css';

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
  return (
      <div className="App">
        <p>
          Clicked: {value} times
          {' '}
          <button onClick={onIncrement}>+</button>
          {' '}
          <button onClick={onDecrement}>-</button>
        </p>
      </div>
  );
}

export default App;
