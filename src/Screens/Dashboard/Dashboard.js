//core react
import React from "react"

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

const Dashboard = props => {

    //*states
    // const [calendarVisible, setcalendarVisible] = useState(false)//show or hide the calendar, (initially hidden)

    // const navigateToDate = (value, event) => {

    //     const date = value.toISOString().split("T")[0]
    //     props.history.push(`/calendar-date/${date}`)

    // }

const navigateToPage = navLinkURL => props.history.push({pathname: navLinkURL})

    // const navigateToAddAppointment = (cell) => {

    //     props.history.push({

    //         pathname: `/add-appointment`,
    //         cell: cell,
    //         date: new Date()

    //     })

    // }

    // const handlers = useSwipeable({
    //     onSwipedDown: () => setcalendarVisible(!calendarVisible),
    //     preventDefaultTouchmoveEvent: true,
    //     trackMouse: true
    // });

    return (

        <div className={classes.container} test-handle="container">
            
            <Header test-handle="header" text={""} />

            <img src={backdrop} alt="A backdrop" test-handle="backdrop" className={classes.backdrop}/>

            <section className={classes.topSection}>

                <header className={classes.clientsTodayContainer}>You have <p className={classes.amount}>8</p> Clients today</header>
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