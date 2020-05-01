import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

axios.get('/api/demo01').then(res => {
  console.log(res.data);
});
axios.get('/api/demo02').then(res => {
  console.log(res.data);
});
function App() {
  return (
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
