//React
import React from "react"

//external
import Calendar from 'react-calendar'

//icons
import arrow from "../../Assets/Icons/arrow.svg"

//css
import classes from "./Calendar.module.css"

const Calendar_ = props => {

    return (

        <Calendar value={new Date()}//set the date as the current date

            //set the prev label - (the left arrow) to an icon, and the second prev label to null
            prevLabel={<img test-handle="left-arrow" src={arrow} alt="An arrow pointing left" className={[classes.calendarArrowLeft, classes.calendarArrow].join(" ")} />} prev2Label={null}

            //set the calendar title to the date
            navigationLabel={({ date, view, label }) => <p className={classes.calendarTitle} test-handle="calendar-title">{label}</p>}

            //set the next label - (the right arrow) to an icon, and the second next label to null
            nextLabel={<img src={arrow} alt="An arrow pointing right" className={[classes.calendarArrowRight, classes.calendarArrow].join(" ")} />} next2Label={null}

            //set the styling of each calendar style
            tileClassName={classes.calendarTile} 
            
            //the classname of the whole calendar
            className={classes.Calendar}

            //Only render days for the current month, do not let them overlap
            showNeighboringMonth={false} 
            
            //Disable higher detail and only allow the user to see monthly, not yearly ect
            maxDetail={"month"} minDetail={"month"}

            //The handler for clicking a calendar tile
            onClickDay={props.onClickDay} />
    )

}


export default Calendar_