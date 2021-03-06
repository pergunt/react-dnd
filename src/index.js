import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board';
import reportWebVitals from './reportWebVitals';

import { observe } from './Game'

const root = document.getElementById('root')

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
