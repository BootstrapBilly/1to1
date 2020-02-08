//Core react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./button.module.css"

const Button = props => (

    <button test-handle="button" className={classes.button} onClick={props.handleClick}>{props.text}</button>
    
)

Button.propTypes = {

    text: PropTypes.string,
    handleClick: PropTypes.func
    
}


export default Button
