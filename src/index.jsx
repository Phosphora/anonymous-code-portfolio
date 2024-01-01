import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './component/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      
      <App />
      
    </HashRouter>
  </React.StrictMode>
);