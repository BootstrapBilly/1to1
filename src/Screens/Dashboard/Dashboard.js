//core react
import React, { useState } from "react"

//components
import Header from "../../Containers/Header/Header"
import Calendar from "../../Components/Calendar/Calendar"
import Appointment from "../../Containers/Appointment/Appointment"
import Grid from "../../Containers/Grid/Grid"

import classes from "./Dashboard.module.css"

const Dashboard = props => {

    const navigateToDate = (value, event) => {

        const date = value.toISOString().split("T")[0]
        props.history.push(`/calendar-date/${date}`)

    }

    const navigateToAddAppointment = (value, event) => {

        props.history.push(`/add-appointment`)

    }

    const [sectionContent, setSectionContent] = useState("grid")

    return (

        <div className={classes.container} test-handle="container">

            <Header test-handle="header" text={"45 minutes until Loren"} />

            <div className={classes.clientsWrapper} test-handle="next-client" style={{ height: sectionContent === "add-to-grid" ? "100vh" : null }}>

                {sectionContent === "grid" ? <Grid onClickActive={() => setSectionContent("client-detail")} onClickEmpty={() => navigateToAddAppointment()} />
                    :  <Appointment handleClickCross={() => setSectionContent("grid")} />}

            </div>
  
            <div className={classes.calendarWrapper} test-handle="calendar"><Calendar dashboardProps={props} onClickDay={(value, event) => navigateToDate(value, event)} /></div>

        </div>

    )

}

export default Dashboard