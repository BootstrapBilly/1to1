import React from "react"
import classes from "./Search-clients.module.css"
import { useDispatch } from "react-redux"
import {setAppointmentHolder} from "../../store/actions/Add Appointment/Add-Appointment-action"

const SearchClients = props => {

    const dispatch = useDispatch()

    const Clients = []
    
    props.clients.forEach(item => Clients.push(item.name))

    return (

        <div className={classes.container}>

            {Clients.map(item => {

                    return <div className={classes.clientContainer} key={item} onClick={()=> dispatch(setAppointmentHolder(item))}><span className={classes.text}>{item}</span></div>

            })}

        </div>
        
    )

}

export default SearchClients