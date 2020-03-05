import React from "react"

const Navlinks = () => (

    <React.Fragment>

        <span className={classes.otherLinks}>

            <Link to="/dashboard" test-handle="home-link" onClick={() => { if (panelOpen) setPanelOpen(false) }}><p className={classes.navLink}>Home</p></Link>

            <Link to={`/calendar-date/${new Date()}`} test-handle="diary-link" onClick={() => { if (panelOpen) setPanelOpen(false) }}><p className={classes.navLink}>Diary</p></Link>

            <Link to="/new-client" test-handle="new-client-link" onClick={() => { if (panelOpen) setPanelOpen(false) }}><p className={classes.navLink}>Add a client</p></Link>

            <p className={classes.navLink}>Find a client</p>

        </span>

        <span className={classes.logout}>

            <p test-handle="logout" onClick={() => handleLogout()} className={classes.navLink}>Log out</p>

        </span>

    </React.Fragment>

)

export default Navlinks