//core react
import React from "react"

//Components
import Logo from "../../Components/Logo/Logo"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"

//css
import classes from "./Authentication.module.css"

const Authentication = props => (

    <div test-handle="container" className={classes.container}>

        <Logo test-handle="logo"/>

        <Input test-handle="input"/>

        <Button test-handle="button" text={"LOG IN"}/>

        <img test-handle="image" alt="" className={classes.img}/>

    </div>

)

export default Authentication