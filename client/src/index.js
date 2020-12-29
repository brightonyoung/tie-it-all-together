import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import Router from './Router'
import ButtonAppBar from './components/ButtonAppBar'

const Main = () => {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Router /> 
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

