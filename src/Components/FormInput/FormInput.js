//react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./FormInput.module.css"

const FormInput = props => (

    <div className={classes.inputContainer} test-handle="container" style={props.overWriteStyle}>

        <div className={classes.inputHeader} test-handle="input-header">

            <span className={classes.inputTitle} test-handle="input-prompt">{props.inputTitle}</span>
            <span className={classes.errorMessage} test-handle="input-error">{props.errorMessage}</span>

        </div>

        <input className={classes.input} placeholder={props.placeholder} test-handle="input-box" value={props.value} onChange={props.handleChange} />

    </div>

)

FormInput.propTypes = {

    inputTitle: PropTypes.string,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func

}

export default FormInput