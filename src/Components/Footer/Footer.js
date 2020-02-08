//react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./Footer.module.css"

//components
import calendar from "../../Assets/Icons/calendar.svg"

const Footer = props => (

    <div className={classes.container}>

        <img src={calendar} alt="A menu icon" className={classes.calendar} onClick={props.onOpen} />

    </div>

)

Footer.propTypes = {

    onOpen: PropTypes.func
    
}

export default Footer