import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {HashRouter} from 'react-router-dom'
import './index.css';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import AllProductReducer from './admin/Reducers/allreducer';

const reduxstore=createStore(AllProductReducer,applyMiddleware(thunk))

ReactDOM.render(

                <HashRouter>
                  <Provider store ={reduxstore}>
                  <App/>
                  </Provider>
                </HashRouter>
                
   ,
  document.getElementById('root')
);
