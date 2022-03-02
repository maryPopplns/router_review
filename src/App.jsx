import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  let navigate = useNavigate();

  function clickHandler() {
    navigate('/');
  }

  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to='invoices'>Invoices</Link>
        <br></br>
        <Link to='expenses'>Expenses</Link>
        <br></br>
        <button onClick={clickHandler}>navigate</button>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
