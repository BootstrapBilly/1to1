//core react
import React from "react"

//components
import Header from "../../Components/Header/Header"
import Calendar from "../../Components/Calendar/Calendar"
import Appointment from "../../Containers/Appointment/Appointment"

import classes from "./Dashboard.module.css"

const Dashboard = props => {

    const navigateToDate = (value, event) => {

        const date = value.toISOString().split("T")[0]
        props.history.push(`/calendar-date/${date}`)

    }

    return (

        <div className={classes.container} test-handle="container">

            <Header test-handle="header" text={"45 minutes until Loren"} />

            <div className={classes.clientsWrapper} test-handle="next-client"><Appointment /><Appointment /><Appointment /><Appointment /><Appointment /><div style={{marginRight:"20vw"}}><Appointment /></div></div>

            <div className={classes.calendarWrapper} test-handle="calendar"><Calendar dashboardProps={props} onClickDay={(value, event)=> navigateToDate(value, event)}/></div>

        </div>

    )

}

export default Dashboard