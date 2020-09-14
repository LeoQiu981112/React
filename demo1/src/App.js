import React from 'react';
import logo from './logo.svg';
import './App.css';
import named_default, {sub} from './add'

console.log(named_default(10,2))
console.log(sub(10,1))


function App() {
  return (
    // jsx
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 233
        </a>
      </header>
    </div>
  );
}

export default App;
