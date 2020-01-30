import React from "react"
import classes from "./Header.module.css"

import PropTypes from "prop-types"

import hamburger from "../../Assets/Icons/hamburger-menu.svg"

const Header = props => {

    return (

        <div test-handle="container" className={classes.container}>
            
            <img src={hamburger} alt="A menu icon" className={classes.hamburgerMenu} test-handle="hamburger" onClick={props.onClickMenu} />
            <p test-handle="header-text" className={classes.next}>{props.text}</p>
        
        </div>

    )

}

Header.propTypes = {

    onClickMenu: PropTypes.func,
    text: PropTypes.string,
    
}

export default Header