//react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./Footer.module.css"

//components
import calendar from "../../Assets/Icons/calendar.svg"
import trash from "../../Assets/Icons/delete.svg"
import time from "../../Assets/Icons/time.svg"

const Footer = props => {

    if (!props.appointmentSelected)

        return (

            <div className={classes.container}>

                <img src={calendar} alt="A menu icon" className={classes.iconWrapper} onClick={props.onOpen} />

            </div>

        )

    else return (

        <div className={classes.container}>

            <img src={trash} alt="A delete icon" className={classes.iconWrapper} onClick={props.onOpen} />
            <img src={time} alt="A reschedule icon" className={classes.iconWrapper} onClick={props.onOpen} />

        </div>

    )

}

Footer.propTypes = {

    onOpen: PropTypes.func

}

export default Footer