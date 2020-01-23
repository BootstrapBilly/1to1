import React from "react"
import classes from "./Header.module.css"

const Header = props => {

    return (

        <div test-handle="container" className={classes.container}>
            
            <p test-handle="amount" className={classes.next}>45 minutes until Loren</p>
            <p test-handle="total" className={classes.total}>8 clients left today</p>
        
        </div>

    )

}

export default Header