//core react
import React from "react"

//components
import Header from "../../Containers/Header/Header"
import Grid from "../../Containers/Grid/Grid"

const CalendarDate = props => {

    const date = props.match.params.date

    var m = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    const dArr = date.split("-");  // ex input "2010-01-18"
    
    const reformattedDate =  dArr[2] + " " + m[parseInt(dArr[1]-1)]+ " " + dArr[0]; //ex out: "18/01/10"

    const navigateToAddAppointment = (cell) => {

        props.history.push({

            pathname: `/add-appointment`,
            cell:cell,
            date: date
            
        })

    }

    return (

        <div test-handle="container">

            <Header test-handle="header" text={reformattedDate} backArrow handleBack={()=> props.history.goBack()}/>

            <Grid date={date} onClickActive={() => console.log("placeholder")} onClickEmpty={(cell) => navigateToAddAppointment(cell)} fullSize/>

        </div>
    )

}

export default CalendarDate