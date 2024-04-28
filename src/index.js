import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import {Provider} from 'react-redux'
import appStore from './redux/store'
import { BrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={appStore}>
    <App />
  </Provider>
  </BrowserRouter>
);

 
reportWebVitals();