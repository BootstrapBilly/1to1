//core react
import React, { useState } from "react"

//components
import Header from "../../Containers/Header/Header"
import Grid from "../../Containers/Grid/Grid"
import Footer from "../../Components/Footer/Footer"
import Calendar from "../../Components/Calendar/Calendar"

import { useSwipeable } from 'react-swipeable'

//css
import classes from "./CalendarDate.module.css"

const CalendarDate = props => {

    const [date, setDate] = useState(props.match.params.date)
    const [calendarActive, setCalendarActive] = useState(false)

    // let date = props.match.params.date

    const current = new Date(date)

    const setNewDate = direction => {

        if(direction === "left")  current.setDate(current.getDate()+1)
        if(direction === "right")  current.setDate(current.getDate()-1)

        return setDate(current.toISOString().split("T")[0])

    }

    var m = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    const dArr = date.split("-");  // ex input "2010-01-18"
    
    const reformattedDate =  dArr[2] + " " + m[parseInt(dArr[1]-1)]+ " " + dArr[0];

    const navigateToAddAppointment = (cell) => {

        props.history.push({

            pathname: `/add-appointment`,
            cell:cell,
            date: date
            
        })

    }

    const navigateToDate = (value, event) => {

        const date = value.toISOString().split("T")[0]
        setDate(date)

    }
    
    const handlers = useSwipeable({
        onSwipedDown: () => setCalendarActive(!calendarActive),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (

        <div test-handle="container">

            <Header test-handle="header" text={reformattedDate} backArrow handleBack={()=> props.history.goBack()}/>

            <div className={classes.gridContainer}><Grid date={date} onClickActive={() => console.log("placeholder")} onClickEmpty={(cell) => navigateToAddAppointment(cell)} fullSize onSwipedLeft={()=> setNewDate("left")} onSwipedRight={()=> setNewDate("right")}/></div>

            {calendarActive ? <div  {...handlers} className={classes.calendarWrapper} test-handle="calendar"><Calendar dashboardProps={props} onClickDay={(value, event) => navigateToDate(value, event)} /></div> 
            
            :

                    <Footer onOpen={() => setCalendarActive(!calendarActive)} />

             }


        </div>
    )

}

export default CalendarDate