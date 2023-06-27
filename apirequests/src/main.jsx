import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PropProvider } from './propContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PropProvider>
      <App />
    </PropProvider>
  </React.StrictMode>
);
