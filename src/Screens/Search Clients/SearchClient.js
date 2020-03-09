//react
import React from "react"

//css
import classes from "./SearchClient.module.css"

//components
import SelectClient from "../../Screens/Add Appointment/SelectClient/SelectClient"
import Header from "../../Containers/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Appointment from "../../Components/Appointment/Appointment"

import {useSelector, useDispatch} from "react-redux"

import {clearDisplayedClient} from "../../store/actions/Find Client/Find-client-action"



const AddToGrid = props => {

    const dispatch = useDispatch()

    const selectedClient = useSelector(state => state.findClient.clientToDisplay)

    return (

        <React.Fragment>

            <Header text={"Search for a client"} backArrow 
            handleBack={selectedClient ? ()=> dispatch(clearDisplayedClient()) : ()=> props.history.goBack()}/>

            <div className={classes.container}>

                {selectedClient ? <Appointment clientInfo={selectedClient} handleClickCross={()=> dispatch(clearDisplayedClient())}/> : <SelectClient findClient/>}

            </div>

            <Footer addAppointment onCancel={()=> props.history.goBack()}/>

        </React.Fragment>

    )

}

export default AddToGrid