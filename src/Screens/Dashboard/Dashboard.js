//core react
import React, { useState } from "react"

//components
import Header from "../../Containers/Header/Header"
import Calendar from "../../Components/Calendar/Calendar"
import Appointment from "../../Components/Appointment/Appointment"
import Grid from "../../Containers/Grid/Grid"
import Footer from "../../Components/Footer/Footer"

//external libraries
import { useSwipeable } from 'react-swipeable'

//css
import classes from "./Dashboard.module.css"

const Dashboard = props => {

    //*states
    const [sectionContent, setSectionContent] = useState("grid")
    const [calendarVisible, setcalendarVisible] = useState(false)//show or hide the calendar, (initially hidden)

    const navigateToDate = (value, event) => {

        const date = value.toISOString().split("T")[0]
        console.log(date)
        props.history.push(`/calendar-date/${date}`)

    }

    const navigateToAddAppointment = (cell) => {

        props.history.push({

            pathname: `/add-appointment`,
            cell: cell,
            date: new Date()

        })

    }

    const handlers = useSwipeable({
        onSwipedDown: () => setcalendarVisible(!calendarVisible),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (

        <div className={classes.container} test-handle="container">

            <Header test-handle="header" text={"Today"} />

            <div className={classes.clientsWrapper} test-handle="next-client" style={{ height: sectionContent === "add-to-grid" ? "100vh" : null }}>

                {sectionContent === "grid" ?

                    <Grid onClickActive={() => setSectionContent("client-detail")} onClickEmpty={(cell) => navigateToAddAppointment(cell)} date={new Date().toISOString().split("T")[0]} />

                    :

                    <Appointment handleClickCross={() => setSectionContent("grid")} />}

            </div>

            {calendarVisible ? <div  {...handlers} className={classes.calendarWrapper} test-handle="calendar"><Calendar dashboardProps={props} onClickDay={(value, event) => navigateToDate(value, event)} /></div> 
            
            :

                    <Footer onOpen={() => setcalendarVisible(!calendarVisible)} />

             }

        </div>

    )

}

export default Dashboard