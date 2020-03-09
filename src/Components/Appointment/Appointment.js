//react
import React from "react"

//prop types
import PropTypes from "prop-types"

//css
import classes from "./Appointment.module.css"

const Appointment = props => (

    <div className={classes.card} test-handle="container">

        <div className={classes.topRow} test-handle="topRow">

            <p className={classes.name} test-handle="name">{props.clientInfo.name}</p>
            <p className={[classes.button, classes.cross].join(" ")} test-handle="cross" onClick={props.handleClickCross}>x</p>

        </div>

        <div className={classes.midRow} test-handle="midRow">

            <p className={classes.time} test-handle="time">11:00 AM</p>
            <p className={classes.date} test-handle="date">24th January 2020</p>

        </div>

        <div className={classes.lowerMidRow} test-handle="lowerMidRow">

            <p className={classes.phoneNumber} test-handle="phone">07742 454452</p>

        </div>

        <div className={classes.notesRow} test-handle="notesRow">

            <p className={classes.notes} test-handle="notes">Buys a lot of products</p>

        </div>

        <div className={classes.bottomRow} test-handle="bottomRow">

            <p className={[classes.button, classes.bottomButton, classes.edit].join(" ")} test-handle="edit" onClick={props.handleClickEdit}>EDIT</p>
            <p className={[classes.button, classes.bottomButton, classes.finish].join(" ")} test-handle="seen" onClick={props.handleClickSeen}>SEEN</p>

        </div>

    </div>

)

Appointment.propTypes = {

    name: PropTypes.string,
    onClickCross: PropTypes.func,
    onClickEdit: PropTypes.func,
    onClickSeen: PropTypes.func,
    time: PropTypes.string,
    date: PropTypes.string,
    phone: PropTypes.string,
    notes: PropTypes.string,

}

export default Appointment