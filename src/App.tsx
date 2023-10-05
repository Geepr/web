import "bootstrap/dist/css/bootstrap.css"
import React from 'react';
import './App.css';
import './NavBar';
import {NavBar} from "./NavBar";

function App() {
  return (
      <>
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="container">
        <main role="main">
          <p>Hello!</p>
        </main>
      </div>
    </>
  );
}

export default App;
