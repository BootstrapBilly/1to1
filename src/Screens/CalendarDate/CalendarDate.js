//core react
import React from "react"

//components
import Header from "../../Components/Header/Header"

const CalendarDate = props => {

    const headerText = props.match.params.date

    return (

        <div test-handle="container">

            <Header test-handle="header" text={headerText}/>

            <section test-handle="form"></section> 

            <section test-handle="grid"></section> 

        </div>
    )

}

export default CalendarDate