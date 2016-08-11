import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Content from './Content'

ReactDOM.render(
  <Content />,
  document.getElementById('app')
);
