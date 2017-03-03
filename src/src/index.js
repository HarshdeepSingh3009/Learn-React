import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'; 
import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData}/>,
    document.getElementById('root'));
