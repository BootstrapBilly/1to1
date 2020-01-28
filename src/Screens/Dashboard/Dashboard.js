//core react
import React from "react"

//components
import Header from "../../Components/Header/Header"
import Calendar from "../../Components/Calendar/Calendar"
import Appointment from "../../Containers/Appointment/Appointment"

import classes from "./Dashboard.module.css"

const Dashboard = props => {

    return (

        <div className={classes.container} test-handle="container">

            <Header test-handle="header" />

            <div className={classes.clientsWrapper} test-handle="next-client"><Appointment /><Appointment /><Appointment /><Appointment /><Appointment /><Appointment /></div>

            <div className={classes.calendarWrapper} test-handle="calendar"><Calendar dashboardProps={props}/></div>

        </div>

    )

}

export default Dashboard