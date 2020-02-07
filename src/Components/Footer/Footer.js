import React from "react"
import classes from "./Footer.module.css"

import calendar from "../../Assets/Icons/calendar.svg"

const Footer = props => {

    return (

        <div className={classes.container}>

            <div className={classes.prev} onClick={props.onPrev}></div>
            <img src={calendar} alt="A menu icon" className={classes.calendar} onClick={props.onOpen} />
            <div className={classes.next} onClick={props.onNext}></div>

        </div>

    )

}

export default Footer