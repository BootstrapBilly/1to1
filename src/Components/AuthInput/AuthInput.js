//react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./AuthInput.module.css"

const AuthInput = props => (

    <input test-handle="input" type="password" placeholder="Enter Pin" className={classes.input} onChange={props.handleChange} style={props.overWriteStyle} autoFocus />

)

AuthInput.propTypes = {

    handleChange: PropTypes.func

}

export default AuthInput
