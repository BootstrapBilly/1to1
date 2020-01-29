import React from "react"

//external
import Calendar from 'react-calendar'

//icons
import arrow from "../../Assets/Icons/arrow.svg"

//css
import classes from "./Calendar.module.css"

const Calendar_ = props => {

    return (

        <Calendar value={new Date()}

            prevLabel={<img src={arrow} alt="An arrow pointing left" className={classes.calendarArrowLeft} />} prev2Label={null}

            navigationLabel={({ date, view, label }) => <p className={classes.calendarTitle}>{label}</p>} 

            nextLabel={<img src={arrow} alt="An arrow pointing right" className={classes.calendarArrowRight} />} next2Label={null}

            tileClassName={classes.calendarTile} className={classes.Calendar}

            showNeighboringMonth={false} maxDetail={"month"} minDetail={"month"}

            onClickDay={props.onClickDay} />
    )

}


export default Calendar_