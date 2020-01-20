import React from "react"
import classes from "./input.module.css"

const Input = props => (

    <input test-handle="input" type="password" placeholder="Enter Pin" className={classes.input} onChange={props.handleChange} style={props.style}/>

)

export default Input
