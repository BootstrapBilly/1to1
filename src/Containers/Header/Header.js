import React, { useState } from "react"
import classes from "./Header.module.css"

import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import hamburger from "../../Assets/Icons/hamburger-menu.svg"

const Header = props => {

    const [panelOpen, setPanelOpen] = useState(false)

    return (

        <div test-handle="container" className={classes.container}>

            <img src={hamburger} alt="A menu icon" className={classes.hamburgerMenu} test-handle="hamburger" onClick={() => setPanelOpen(!panelOpen)} />

            <p test-handle="header-text" className={classes.title}>{props.text}</p>

            <div test-handle="side-panel" className={panelOpen ? classes.sidePanel : classes.sidePanelClosed}>

                <div className={classes.navLinks}>
                    
                {/* <Link to="/dashboard" onClick={() => { if (panelOpen) setPanelOpen(false) }}><p>Dashboard</p></Link>  
                <Link to="/new-client" onClick={() => { if (panelOpen) setPanelOpen(false) }}><p>Add a new client</p></Link>   */}
                <p>Find a client</p>

                </div>

            </div>

            <div test-handle="closeArea">{panelOpen ? <div onClick={() => { if (panelOpen) setPanelOpen(false) }} className={classes.closeArea}></div> : null}</div>

        </div>

    )

}

Header.propTypes = {

    text: PropTypes.string

}

export default Header