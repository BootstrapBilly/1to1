//core react
import React, { useEffect } from "react"

//external


//components
import Header from "../../Containers/Header/Header"

//css
import classes from "./Dashboard.module.css"

//assets
import diary from "../../Assets/Icons/diary.svg"
import add_client from "../../Assets/Icons/add-client.svg"
import search_client from "../../Assets/Icons/search-client.svg"
import tutorial from "../../Assets/Icons/tutorial.svg"
import backdrop from "../../Assets/Img/dashboard-backdrop.png"

import {useSelector, useDispatch} from "react-redux"

import { fetchAppointments } from "../../store/actions/Fetch Appointments/fetch-appointment-action"

const Dashboard = props => {

    //*states

    const dispatch = useDispatch()

const navigateToPage = navLinkURL => props.history.push({pathname: navLinkURL})

const appointments = useSelector(state => state.fetchAppointments.appointments)//get the appointment data fetched from the api

useEffect(()=> {

    dispatch(fetchAppointments(new Date().toISOString().split("T")[0]))//fetch the appointment data for that date

},[])

    return (

        <div className={classes.container} test-handle="container">
            
            <Header test-handle="header" text={""} />
            
            <section className={classes.topSection}>

    <header className={classes.clientsTodayContainer}>You have <p className={classes.amount}>{appointments.length}</p>{appointments.length === 1 ? <span>Client today</span> : <span>Clients today</span>}</header>
                <span className={classes.amountBigScreen}>8</span>

            </section>

            <section className={classes.menuContainer}>

                {[["Diary", diary, `/calendar-date/${new Date()}`], ["Add a client", add_client, `/new-client`], ["Manage Clients", search_client, "/manage-clients"], ["Tutorial", tutorial]].map(item =>

                    <div test-handle={item[0]} className={classes.menuBoxContainer} key={item} onClick={()=> navigateToPage(item[2])}>

                        <img src={item[1]} alt="A menu icon" className={[classes.hamburgerMenu, classes.icon].join(" ")} test-handle="menu-icon" />

                        {item[0]}

                    </div>)}

            </section>

        </div>

    )

}

export default Dashboard