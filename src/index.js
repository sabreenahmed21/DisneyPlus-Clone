import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Components/Slices/UserStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
