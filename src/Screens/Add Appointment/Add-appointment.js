import React, { useState } from "react"
import classes from "./Add-appointment.module.css"

import SelectLength from "./SelectLength/SelectLength"
import SelectClient from "./SelectClient/SelectClient"
import Header from "../../Containers/Header/Header"

const AddToGrid = props => {

    const [lengthChosen, setLengthChosen] = useState(false)


    return (

        <div className={classes.container}>

            <Header text={lengthChosen ? "Select a client" : "Appointment length"} backArrow/>

            {lengthChosen ? <SelectClient /> : <SelectLength />}

        </div>
    )

}

export default AddToGrid