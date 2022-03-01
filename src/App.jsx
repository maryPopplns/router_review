import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to='/invoices'>Invoices</Link>
        <br></br>
        <Link to='/expenses'>Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
