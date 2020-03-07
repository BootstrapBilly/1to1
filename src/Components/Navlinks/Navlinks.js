import React from "react"

import { Link } from "react-router-dom"

import classes from "./Navlinks.module.css"

const Navlinks = props => (

    <React.Fragment>

        <span className={classes.otherLinks}>

            <Link to="/dashboard" test-handle="home-link" onClick={props.onClickLink}><p className={classes.navLink}>Home</p></Link>

            <Link to={`/calendar-date/${new Date()}`} test-handle="diary-link" onClick={props.onClickLink}><p className={classes.navLink}>Diary</p></Link>

            <Link to="/new-client" test-handle="new-client-link" onClick={props.onClickLink}><p className={classes.navLink}>Add new client</p></Link>

            <p className={classes.navLink}>Find a client</p>

        </span>

        <span className={classes.logout}>

            <p test-handle="logout" onClick={props.handleLogout} className={classes.navLink}>Log out</p>

        </span>

    </React.Fragment>

)

export default Navlinks