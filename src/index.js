import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// unset HOST --> MAC local host 세팅 
// npm start 