import React, { useState } from "react"
import classes from "./Add-appointment.module.css"

import SelectLength from "./SelectLength/SelectLength"
import SelectClient from "./SelectClient/SelectClient"
import Header from "../../Containers/Header/Header"

const AddToGrid = props => {

    const [lengthChosen, setLengthChosen] = useState(null)


    return (

        <React.Fragment>

            <Header text={lengthChosen ? "Select a client" : "Appointment length"} backArrow 
            handleBack={()=> lengthChosen ? setLengthChosen(null) : props.history.goBack()}/>

            <div className={classes.container}>

                {lengthChosen ? <SelectClient /> : <SelectLength onClickOption={(value)=> setLengthChosen(value)}/>}

            </div>

        </React.Fragment>

    )

}

export default AddToGrid