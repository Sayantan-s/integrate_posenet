import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Workout from './Workout';
import reportWebVitals from './reportWebVitals';
//import Character from './Character';
import Landing from './Landing';
import './assets/fonts/stylesheet.css' 
import * as BrowserRouter from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
