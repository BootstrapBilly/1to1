//react
import React, { useState, useEffect } from "react"

//css
import classes from "./Add-appointment.module.css"

//components
import SelectLength from "./SelectLength/SelectLength"
import SelectClient from "./SelectClient/SelectClient"
import Header from "../../Containers/Header/Header"

//redux hooks
import {useSelector, useDispatch} from "react-redux"

//redux actions
import {addAppointment, reset} from "../../store/actions/Add Appointment/Add-Appointment-action"

const AddToGrid = props => {

    /*//!

Bug caused by the props not being passed in when going back

   //! */

    //_Config
    const dispatch = useDispatch()//initialise the action dispatcher
    const cell = props.history.location.cell//grab the first cell where the appointment starts from, from props
    const date = props.history.location.date//grab the date passed in by props

    //*states
    const [lengthChosen, setLengthChosen] = useState(null)//holds the state which determines the length of the appointment (initially it hasn't been sey)

    //-Selectors
    const appointmentHolder = useSelector(state => state.addAppointment.clientName)//grab the appointment holder from the store, (set on the select client screen)
    const appointmentAdded = useSelector(state => state.addAppointment.appointmentAdded)//listen for the appointment being added (dispatched when all info has been set)

    //!Effects
    useEffect(()=> {

        //if all the necessary information has been submitted, dispatch an add appointment action with the relevant information
        if(appointmentHolder && cell && lengthChosen && date) dispatch(addAppointment({clientName: appointmentHolder, cell:cell, date:date, appointmentLength:lengthChosen}))

        //if the appointment has been added successfully
        if(appointmentAdded) {

            props.history.push(`/calendar-date/${date}`)//navigate back to the grid date where it was set
            dispatch(reset())//and reset everything

        }
        
    })

    return (

        <React.Fragment>

            <Header text={lengthChosen ? "Select a client" : "Appointment length"} backArrow 
            handleBack={()=> lengthChosen ? setLengthChosen(null) : props.history.push(`/add-appointment`)}/>

            <div className={classes.container}>

                {lengthChosen ? <SelectClient /> : <SelectLength cell={cell} onClickOption={(value)=> setLengthChosen(value)}/>}

            </div>

        </React.Fragment>

    )

}

export default AddToGrid