import React from "react"
import classes from "./Header.module.css"

import hamburger from "../../Assets/Icons/hamburger-menu.svg"

const Header = props => {

    return (

        <div test-handle="container" className={classes.container}>
            
            <img src={hamburger} alt="A menu icon" className={classes.hamburgerMenu} test-handle="hamburger" />
            <p test-handle="header-text" className={classes.next}>{props.text}</p>
        
        </div>

    )

}

export default Header