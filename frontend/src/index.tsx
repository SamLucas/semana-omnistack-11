import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {GlobalStyle, Typography} from './config/globalStyle'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/> <Typography />
  </React.StrictMode>,
  document.getElementById('root')
);
