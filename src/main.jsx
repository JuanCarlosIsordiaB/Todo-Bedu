import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './08-useReducer/TodoApp';

import './index.css';
import { AppRouter } from './router/AppRouter';
import { HooksApp } from './HooksApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <HooksApp/>
  </BrowserRouter>
    
  // </React.StrictMode>
)
