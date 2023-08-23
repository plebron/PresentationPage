import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import serviceWorker from 'ServiceWorker'
import { MyProvider } from './context'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyProvider>
      <BrowserRouter>      
        <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MyProvider>
);

serviceWorker.unregister();