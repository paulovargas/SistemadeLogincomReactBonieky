import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

function App() {
  return (
    <div className="App">
      <h1>Header do Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Pagina Privada</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<Private />}/>
      </Routes>
    </div>
  );
}

export default App;
