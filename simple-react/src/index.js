import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import BasicsList from "./componets/BasicsList.js";
import PageHeader from "./componets/PageHeader.js";
import TipsList from './componets/TipsList';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// // Render page header
// ReactDOM.render(
//   <PageHeader />,
//   document.getElementById('pageheader')
// );

// // Render tips list
// ReactDOM.render(
//   <TipsList />,
//   document.getElementById("tipslist")
// );

// // Render basics list
// // will insert JSX into html between the id tags <div id="List"></div>
// ReactDOM.render(
//   <BasicsList />,
//   document.getElementById('basicslist')
// );

// List element: <li></li> 
// division: <div></div>
// Unordered list: <ul></ul>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
