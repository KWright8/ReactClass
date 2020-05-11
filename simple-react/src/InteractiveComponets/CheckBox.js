import React from "react"

function CheckBox() {
    return (
        <div>
        <h3>Survey</h3>
        <p>Learning React using Scrimba class was.. </p>
        <input type="checkbox" id="Easy" name="scales" />
        <label for="Easy">Too Easy</label>
        <br />
        <input type="checkbox" id="Moderate" name="Moderate" />
        <label for="Moderate">A bit of a challenge</label>
        <br />
        <input type="checkbox" id="Difficult" name="Difficult" />
        <label for="Difficult">Impossible</label>
        </div>
    )
}


export default CheckBox