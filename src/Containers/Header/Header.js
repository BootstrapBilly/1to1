//react
import React, { useState } from "react"

//css
import classes from "./Header.module.css"

//external
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

//redux hooks
import {useDispatch} from "react-redux"

//redux actions
import {logout} from "../../store/actions/Auth/Auth-action"

//assets
import hamburger from "../../Assets/Icons/hamburger-menu.svg"
import backArrow from "../../Assets/Icons/back-arrow.svg"

const Header = props => {

    //config
    const dispatch = useDispatch()

    //states
    const [panelOpen, setPanelOpen] = useState(false)//set the intial state of the side panel to closed

    //functions
    const handleLogout = () => {

        if (panelOpen) setPanelOpen(false)

        dispatch(logout())

    }

    return (

        <div test-handle="container" className={classes.container}>

            {props.backArrow ? <img src={backArrow} alt="A back button" className={[classes.backArrow, classes.icon].join(" ")} onClick={props.handleBack} /> : null}

            <img src={hamburger} alt="A menu icon" className={[classes.hamburgerMenu, classes.icon].join(" ")} test-handle="hamburger-icon" onClick={() => setPanelOpen(!panelOpen)} />
            
            <p test-handle="header-text" className={classes.title}>{props.text}</p>

            <div test-handle="side-panel" className={panelOpen ? classes.sidePanel : classes.sidePanelClosed}>

                <div className={classes.navLinks}>

                    <Link to="/dashboard" onClick={() => { if (panelOpen) setPanelOpen(false) }}><p>Home</p></Link>
                    <Link to="/new-client" onClick={() => { if (panelOpen) setPanelOpen(false) }}><p>Add a client</p></Link>
                    <p>Find a client</p>
                    <p test-handle="logout" onClick={()=> handleLogout()}>Log out</p>

                </div>

            </div>

            <div test-handle="closeArea">{panelOpen ? <div onClick={() => { if (panelOpen) setPanelOpen(false) }} className={classes.closeArea}></div> : null}</div>

        </div>

    )

}

Header.propTypes = {

    text: PropTypes.string,
    backArrow: PropTypes.bool,
    handleBack: PropTypes.func

}

export default Header