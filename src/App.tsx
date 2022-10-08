import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ count, setCount ] = useState<number>(0);

  const handleIncrement = (): void => {
    setCount(count + 1);
  }

  const handleDecrement = (): void => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React edwin
        </a>
      </header>
      <div>
        <p className='counter'>Value { count }</p>
        <button onClick={handleIncrement}>Sumar</button>
        <button onClick={handleDecrement}>Restar</button>
      </div>
    </div>
  );
}

export default App;
