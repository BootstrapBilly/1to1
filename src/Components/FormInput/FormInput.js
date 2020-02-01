import React from "react"

import classes from "./FormInput.module.css"

const FormInput = props => {

    return (

        <div className={classes.inputContainer} test-handle="container" style={props.setBorder}>

        <div className={classes.inputHeader} test-handle="input-header">

            <span className={classes.promptText} test-handle="input-prompt">{props.prompt}</span>
            <span className={classes.errorText} test-handle="input-error">{props.setError}</span>

        </div>

        <input className={classes.input} placeholder={props.placeholder} test-handle="input-box" value={props.value} onChange={props.handleChange} />

    </div>

    )

}

export default FormInput