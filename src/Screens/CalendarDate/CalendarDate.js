//core react
import React, { useState, useEffect } from "react"

//components
import Header from "../../Containers/Header/Header"
import Grid from "../../Containers/Grid/Grid"
import Footer from "../../Components/Footer/Footer"
import Calendar from "../../Components/Calendar/Calendar"
import { confirmDelete } from "./confirmDelete"
import ReschedulePrompt from "../../Components/ReschedulePrompt/ReschedulePrompt"

//external
import { useSwipeable } from 'react-swipeable'

//redux hooks
import { useSelector, useDispatch } from "react-redux"

//redux actions
import { sendDeleteAppointment, dispatch_set_selected_appointment } from "../../store/actions/SelectedAppointment/SelectedAppointment-action"

//css
import classes from "./CalendarDate.module.css"

const CalendarDate = props => {

    //*states
    const [date, setDate] = useState(props.match.params.date)//the date which determines which appointments are rendered(initially passed in by props)
    const [calendarActive, setCalendarActive] = useState(false)//state which shows or hides the calendar overlay which is used to select a new date
    const [rescheduleMode, setRescheduleMode] = useState(false)

    const dispatch = useDispatch()

    //_config
    const current = new Date(date)//create a new date from the current day to be manipulated
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];//store the months in an array for display purposes, (a JS date is converted into a more readable date)

    const dateToIsoString = new Date(date).toISOString().split("T")[0]//convert the date state into an string which can be further split
    const dArr = dateToIsoString.split("-"); //split the date into 3 seperate elements e.g [2020, 11, 2]

    const reformattedDate = dArr[2] + " " + months[parseInt(dArr[1] - 1)] + " " + dArr[0]; //take the day, then convert the month using the months array, then the year
    //date is now 11 February 2020

    //? Selectors
    const currentSelectedAppointment = useSelector(state => state.selectedAppointment.selectedAppointment)

    //=Functions

    const handleSwipe = modifier => {

        current.setDate(current.getDate() + modifier)
        return dispatch(dispatch_set_selected_appointment(null))

    }

    const setNewDate = direction => {//changes the date based on the direction which the user swipes on the grid

        if (direction === "left") handleSwipe(1)//if they swipe left, increase the date
        if (direction === "right") handleSwipe(-1)//if they swipe left, decrease it

        return setDate(current.toISOString().split("T")[0])//set the new date state(at the top) to the date. Trim off the time with .toiso.split()

    }

    const navigateToDate = (value, event) => {//changes the date based on which calendar item the user pressed

        const date = value.toISOString().split("T")[0]//get the date where they pressed, and split the time off of it
        setDate(date)//set the new date, changing the grid and information along with it
        setCalendarActive(false)

    }

    const navigateToAddAppointment = (cell) => {//navigates to add appointment(called when an empty cell is pressed)

        if (currentSelectedAppointment) return dispatch(dispatch_set_selected_appointment(null))

        props.history.push({

            pathname: `/add-appointment`,
            cell: cell,
            date: dateToIsoString

        })

    }

    const handleDelete = () => {

        const dispatchDelete = () => {

            dispatch(sendDeleteAppointment(currentSelectedAppointment.id))

        }

        confirmDelete(currentSelectedAppointment, dispatchDelete)

    }

    const handleReschedule = () => {

        setRescheduleMode(!rescheduleMode)

    }

    const listenForSwipes = useSwipeable({//a function which uses the swipable library to listen for swiping down on the calendar, it hides it on swipe

        onSwipedDown: () => setCalendarActive(!calendarActive),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true

    });

    useEffect(() => {

        if (!currentSelectedAppointment && rescheduleMode) setRescheduleMode(false)

    })

    return (

        <div test-handle="container">

            <Header test-handle="header" text={reformattedDate} backArrow handleBack={() => props.history.push("/dashboard")} />

            <div className={classes.gridContainer}>

                {rescheduleMode ? <ReschedulePrompt/> : null}

                <Grid date={dateToIsoString} onClickEmpty={(cell) => navigateToAddAppointment(cell)} fullSize onSwipedLeft={() => setNewDate("left")} onSwipedRight={() => setNewDate("right")} rescheduleMode={rescheduleMode} />

            </div>

            {calendarActive ?

                <div  {...listenForSwipes} className={classes.calendarWrapper} test-handle="calendar">

                    <Calendar dashboardProps={props} onClickDay={(value, event) => navigateToDate(value, event)} />

                </div>

                : <Footer onOpen={() => setCalendarActive(!calendarActive)} appointmentSelected={currentSelectedAppointment} onDelete={() => handleDelete()} onReschedule={() => handleReschedule()} rescheduleMode={rescheduleMode}/>

            }


        </div>
    )

}

export default CalendarDate