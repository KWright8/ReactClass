import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div><h1>Created a React App</h1><p>Things to remember: Adj JSX elements must be wrapped in something for example div 
    so it can be considered one element with two elements inside.</p></div>,
  document.getElementById('root')
);


// create a list of animals and display with bullets
var cute_animals = ['Bunny','Alpaca','Kittens', 'puppies']
const uAnimals = cute_animals.map((cute_animals)=>{ 
  return <li>{cute_animals}</li>; 
});

ReactDOM.render(
  <ul>
    {uAnimals}
  </ul>,
  document.getElementById('List')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
