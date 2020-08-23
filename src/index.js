import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {HashRouter} from 'react-router-dom'
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './admin/Reducers/allReducersCombined';


const reduxstore = createStore(
  allReducers
);

ReactDOM.render(

                <HashRouter>
                  <Provider store ={reduxstore}>
                  <App/>
                  </Provider>
                </HashRouter>
                
   ,
  document.getElementById('root')
);
