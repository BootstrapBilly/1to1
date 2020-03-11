import React from "react"
import classes from "./ReschedulePrompt.module.css"

const ReschedulePrompt = props => {

    return (

        <div className={classes.container}>

            <div className={classes.innerContainer}>
                
                <p className={classes.text}>Select an empty square to move the appointment <b>start time</b> to</p>

            </div>

        </div>
    )
}

export default ReschedulePrompt