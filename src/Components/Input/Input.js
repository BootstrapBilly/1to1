import React from "react"
import classes from "./input.module.css"

const Input = props => (

    <input test-handle="input" type="password" placeholder="ENTER PIN" className={classes.input} onChange={props.handleChange}/>

)

export default Input
