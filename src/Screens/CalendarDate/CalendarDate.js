//core react
import React from "react"

//components
import Header from "../../Components/Header/Header"

const CalendarDate = props => {

    console.log(props)

    return (

        <div test-handle="container">

            <Header test-handle="header" text={props.match.params.date}/>

            <section test-handle="form"></section> 

            <section test-handle="grid"></section> 

        </div>
    )

}

export default CalendarDate