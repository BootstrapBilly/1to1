import React, { useState, useEffect } from "react"
import classes from "./Add-appointment.module.css"

import SelectLength from "./SelectLength/SelectLength"
import SelectClient from "./SelectClient/SelectClient"
import Header from "../../Containers/Header/Header"

import {useSelector, useDispatch} from "react-redux"

import {addAppointment, reset} from "../../store/actions/Add Appointment/Add-Appointment-action"

const AddToGrid = props => {

    const dispatch = useDispatch()

    const cell = props.history.location.cell
    const date = props.history.location.date

    const [lengthChosen, setLengthChosen] = useState(null)

    const selectedClient = useSelector(state => state.addAppointment.clientName)
    const appointmentAdded = useSelector(state => state.addAppointment.appointmentAdded)


    useEffect(()=> {

        if(selectedClient && cell && lengthChosen && date) dispatch(addAppointment({clientName: selectedClient, cell:cell, date:date, appointmentLength:lengthChosen}))

        if(appointmentAdded) {

            props.history.push(`/calendar-date/${date}`)
            dispatch(reset())

        }
        
    })


    return (

        <React.Fragment>

            <Header text={lengthChosen ? "Select a client" : "Appointment length"} backArrow 
            handleBack={()=> lengthChosen ? setLengthChosen(null) : props.history.goBack()}/>

            <div className={classes.container}>

                {lengthChosen ? <SelectClient /> : <SelectLength cell={cell} onClickOption={(value)=> setLengthChosen(value)}/>}

            </div>

        </React.Fragment>

    )

}

export default AddToGrid