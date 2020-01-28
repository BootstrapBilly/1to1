//core react
import React from "react"

//external
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

//icons
import arrow from "../../Assets/Icons/arrow.svg"


//components
import Header from "../../Components/Header/Header"

import classes from "./Dashboard.module.css"

const Dashboard = props => {

    const dashboardProps = props;

    return (

        <div className={classes.container} test-handle="container">

            <Header test-handle="header" />

            <div test-handle="next-client"></div>

            <div className={classes.calendarWrapper} test-handle="calendar">

                <Calendar value={new Date()}

                    prevLabel={<img src={arrow} alt="An arrow pointing left" className={classes.calendarArrowLeft} />} prev2Label={null}

                    navigationLabel={({ date, view, label }) => <p className={classes.calendarTitle}>{label}</p>}

                    nextLabel={<img src={arrow} alt="An arrow pointing right" className={classes.calendarArrowRight} />} next2Label={null}
                   
                    tileClassName={classes.calendarTile} className={classes.Calendar}

                    showNeighboringMonth={false} maxDetail={"month"} minDetail={"month"}

                    onClickDay={() => console.log(dashboardProps)} /></div>

        </div>

    )

}

export default Dashboard