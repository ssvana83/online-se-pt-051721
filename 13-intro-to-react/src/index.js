import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {myAmazingFunction, myAmazingFunction3} from './myfile'

myAmazingFunction()

myAmazingFunction3()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
