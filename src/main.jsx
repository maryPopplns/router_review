import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/invoices' element={<Invoices />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
