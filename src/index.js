import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MyProvider } from './context'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import CSS
import './app/styles/base.css'
import './app/styles/layout.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </MyProvider>
);

reportWebVitals();