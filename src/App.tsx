import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import {Info} from './components/info/Info';

function App() {
  return (
    <div className="App">
     <Header/>
        <Main/>
        <Info/>
    </div>
  );
}

export default App;
