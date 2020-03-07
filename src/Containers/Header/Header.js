//react
import React, { useState } from "react"

//css
import classes from "./Header.module.css"

//external
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

//redux hooks
import { useDispatch } from "react-redux"

//redux actions
import { logout } from "../../store/actions/Auth/Auth-action"

//assets
import hamburger from "../../Assets/Icons/hamburger-menu.svg"
import backArrow from "../../Assets/Icons/back-arrow.svg"

//components
import NavLinks from "../../Components/Navlinks/Navlinks"

const Header = props => {

    //_config
    const dispatch = useDispatch()

    //*states
    const [panelOpen, setPanelOpen] = useState(false)//set the intial state of the side panel to closed

    //!functions
    const handleLogout = () => {

        if (panelOpen) setPanelOpen(false)

        dispatch(logout())

    }

    return (

        <div test-handle="container" className={classes.container}>

            {props.backArrow ? <img test-handle="back-button" src={backArrow} alt="A back button" className={[classes.backArrow, classes.icon].join(" ")} onClick={props.handleBack} /> : null}

            <p test-handle="header-text" className={classes.title} onClick={props.onClickHeader}>{props.text}</p>

            <img src={hamburger} alt="A menu icon" className={[classes.hamburgerMenu, classes.icon].join(" ")} test-handle="hamburger-icon" onClick={() => setPanelOpen(!panelOpen)} />

            <div test-handle="side-panel" className={panelOpen ? classes.sidePanel : classes.sidePanelClosed}>

                <div className={classes.navMenu}>

                    <NavLinks onClickLink={() => { if (panelOpen) setPanelOpen(false) }} handleLogout={() => handleLogout()} />

                </div>

            </div>

            <div className={classes.navBar}>

                <NavLinks onClickLink={() => { if (panelOpen) setPanelOpen(false) }} handleLogout={() => handleLogout()} />

            </div>

        </div>

    )

}

Header.propTypes = {

    text: PropTypes.string,
    backArrow: PropTypes.bool,
    handleBack: PropTypes.func

}

export default Header