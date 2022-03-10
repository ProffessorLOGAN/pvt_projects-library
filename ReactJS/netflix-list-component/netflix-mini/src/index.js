import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './components/Head';
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Head />
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
