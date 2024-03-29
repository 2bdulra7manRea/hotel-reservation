import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { EatLoading } from 'react-loadingg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

import { Provider } from 'react-redux';
import store from './store/store';
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<EatLoading/>}>
    <Provider store={store}>
    <App />
    </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
