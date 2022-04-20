import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css';
import App from './App';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
