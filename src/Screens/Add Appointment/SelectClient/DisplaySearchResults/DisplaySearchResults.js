//react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./DisplaySearchResults.module.css"

//redux hooks
import { useDispatch } from "react-redux"

//redux actions
import { setAppointmentHolder } from "../../../../store/actions/Add Appointment/Add-Appointment-action"
import {setClientToDisplay} from "../../../../store/actions/Find Client/Find-client-action"

const SearchClients = props => {

    //_config
    const dispatch = useDispatch()//initialise the redux action dispatcher hook
    const Clients = []//initialise an empty array to hold clients

    props.clients.forEach(item => Clients.push(item.name))//fill the clients array with the clients fetched from the database(passed in by parent component)

    return (

        <div className={classes.container}>

            {Clients.map(item => {

                return <div test-handle={`${item}`} className={classes.clientContainer} key={item} onClick={()=> props.findClient? dispatch(setClientToDisplay(item)) : dispatch(setAppointmentHolder(item))}><span className={classes.text}>{item}</span></div>

            })}

        </div>

    )

}

SearchClients.propTypes = {

    clients:PropTypes.array,

}

export default SearchClients