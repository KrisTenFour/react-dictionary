import './App.css';
import React from 'react';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header><h1>Dictionary</h1></header>
        <main>
          <Dictionary defaultKeyword={"incomprehensible"} />
        </main>
      </div>
      <footer>Coded by{' '}
        <a href='https://kristen-n.netlify.app/' rel="noreferrer" target="_blank">Kristen Namigai</a>🧝🏻, {' '}
        <a href='https://github.com/KrisTenFour/react-dictionary' rel="noreferrer" target="_blank">open-souced on GitHub</a> and hosted on{' '}
        <a href='https://www.netlify.com/' rel="noreferrer" target="_blank">Netlify</a></footer>
    </div>
  );
}

export default App;
