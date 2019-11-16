import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";

function App() {
  return (
    <div className="App">
      <div data-testid="header">
        <Header/>
      </div>

    </div>
  );
}

export default App;
