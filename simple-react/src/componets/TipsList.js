import React from "react"
import ReactDOM from "react-dom"

function TipsList() {
    return (
      <ul style={{fontSize: "20px", fontFamily:"sans"}}>
      Things to remember: 
        <li>Adj JSX elements muste wrapped in something for example div 
        so it can be considered one element with two 
        elements inside. </li>
        <li>Using functions allows for the reuse of componets.</li>
      </ul>
    )
}

export default TipsList