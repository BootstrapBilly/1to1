//core react
import React from "react"

//assets
import LogoImg from "../../Assets/Img/121-Logo.png"

//css 
import classes from "./Logo.module.css"

const Logo = props => (

    <img src={LogoImg} alt="A logo of the 121 diet" test-handle="logo" className={classes.logo}/>

)

export default Logo