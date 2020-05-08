import React from "react"
import ReactDOM from "react-dom"
import footerImage from "../wavefooter.png"
import "../index.css";

function PageFooter() {
    return (
        <div>
            <img src={footerImage} className="photo" /> 
        </div> 
    )
}
export default PageFooter