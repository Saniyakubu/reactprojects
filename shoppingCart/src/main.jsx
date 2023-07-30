import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ContextStore from './context/contextStore.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextStore>
      <Router>
        <App />
      </Router>
    </ContextStore>
  </React.StrictMode>
);
