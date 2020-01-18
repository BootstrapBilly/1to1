import React from "react"
import PropTypes from "prop-types"
import classes from "./button.module.css"

const Button = props => (

    <button test-handle="button" className={classes.button}>{props.text}</button>
    

)

Button.propTypes = {

    text: PropTypes.string,
    onClick: PropTypes.func
    
}


export default Button
