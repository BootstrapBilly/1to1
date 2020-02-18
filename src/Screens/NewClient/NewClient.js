//react
import React from "react"

//components
import Form from "../../Containers/Form/Form"
import Header from "../../Containers/Header/Header"
import classes from "./NewClient.module.css"

const NewClient = props => {

    return (

        <div test-handle="container" className={classes.container}>

            <Header text={"success-alert"} test-handle="header" backArrow handleBack={() => props.history.push("/dashboard")} />

            <div className={classes.innerContainer}>

                <Form test-handle="form" />

                <div test-handle="submit"></div>

            </div>

        </div>

    )

}

export default NewClient