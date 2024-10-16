import './App.css';
import React from 'react';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header><h1>Dictionary</h1></header>
        <main>
          <Dictionary />
        </main>
        <footer>This page was coded by Kristen Namigai🧝🏻and is open-souced on GitHub and hosted on Netlify</footer>
      </div>
    </div>
  );
}

export default App;
