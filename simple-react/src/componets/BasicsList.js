import React from 'react';
import ReactDOM from 'react-dom'

// create a list of animals and display with bullets
var basics= ['List element: <li></li> ','A division: <div></div>',
                    'Unordered list: <ul></ul>','Add inline style: style={{ color:"pink"}}']
const ulbasics = basics.map((basics)=>{ 
  return <li style={{fontFamily:"sans"}}>{basics}</li>; 
});

// create a function and return the JSX to be 
// displayed
function BasicsList() {
  return (
    <ul style={{fontFamily:"sans",fontSize:"20px"}}>
      Basics:
      {ulbasics}
    </ul>
  )
}

export default BasicsList