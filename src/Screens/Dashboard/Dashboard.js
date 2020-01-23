//core react
import React from "react"

//components


//components
import Header from "../../Components/Header/Header"

import classes from "./Dashboard.module.css"

const Dashboard = props => {

    return (

        <div className={classes.container} test-handle="container">

            <Header test-handle="header" />

        </div>

    )

}

export default Dashboard