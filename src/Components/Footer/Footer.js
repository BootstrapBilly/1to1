//react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./Footer.module.css"

//assets
import calendar from "../../Assets/Icons/calendar.svg"
import trash from "../../Assets/Icons/delete.svg"
import time from "../../Assets/Icons/time.svg"
import cancel from "../../Assets/Icons/cancel.svg"
import leftArrow from "../../Assets/Icons/left-arrow.svg"
import rightArrow from "../../Assets/Icons/right-arrow.svg"


const Footer = props => {

    return (

        <React.Fragment>

            {props.appointmentSelected ?

                <div className={classes.container}>

                    <img src={trash} alt="A delete icon" className={classes.iconWrapper} onClick={props.onDelete} test-handle="delete-icon" />
                    <img src={trash} alt="A Modify icon" className={classes.iconWrapper} onClick={props.onModify} test-handle="modify-icon" />
                    <img src={time} alt="A reschedule icon" className={props.rescheduleMode ? [classes.iconWrapper, classes.active].join(" ") : classes.iconWrapper} onClick={props.onReschedule} />

                </div>

                : props.addAppointment ?

                    <div className={classes.container}>

                        <img src={cancel} alt="A menu icon" className={classes.iconWrapper} onClick={props.onCancel} test-handle="cancel-icon" />

                    </div>

                    :

                    <div className={classes.container}>

                        <img src={leftArrow} alt="A menu icon" className={classes.iconWrapper} onClick={props.onLeft} test-handle="left-icon" />
                        <img src={calendar} alt="A menu icon" className={classes.iconWrapper} onClick={props.onOpen} test-handle="calendar-icon" />
                        <img src={rightArrow} alt="A menu icon" className={classes.iconWrapper} onClick={props.onRight} test-handle="right-icon" />

                    </div>}

        </React.Fragment>

    )

}

Footer.propTypes = {

    onOpen: PropTypes.func,
    onDelete: PropTypes.func,
    onReschedule: PropTypes.func

}

export default Footer