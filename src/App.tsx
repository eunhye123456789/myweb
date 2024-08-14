import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={process.env.PUBLIC_URL + '다운로드.png'} className="사진" alt="사진" />
        <p>
         안녕하세요.리액트 시작합니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
         learn React 
        </a>
      </header>
    </div>
  );
}

export default App;
