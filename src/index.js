import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Workout from './Workout';
import reportWebVitals from './reportWebVitals';
//import Character from './Character';
import Landing from './Landing';
import './assets/fonts/stylesheet.css' 
import { Provider } from  'react-redux'
import store from './store/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
      <React.StrictMode>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </React.StrictMode>
  </Provider>
</BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
