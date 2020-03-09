//react
import React from "react"

//css
import classes from "./SearchClient.module.css"

//components
import SelectClient from "../../Screens/Add Appointment/SelectClient/SelectClient"
import Header from "../../Containers/Header/Header"
import Footer from "../../Components/Footer/Footer"



const AddToGrid = props => {

    return (

        <React.Fragment>

            <Header text={"Search for a client"} backArrow 
            handleBack={()=> props.history.goBack()}/>

            <div className={classes.container}>

                <SelectClient findClient handleClick={()=> console.log("el clicko")}/>

            </div>

            <Footer addAppointment onCancel={()=> props.history.goBack()}/>

        </React.Fragment>

    )

}

export default AddToGrid