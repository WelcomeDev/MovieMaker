import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/adaptive.scss';
import reportWebVitals from './reportWebVitals';
import { MainPage } from './modules/Main/pages/mainPage';

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
