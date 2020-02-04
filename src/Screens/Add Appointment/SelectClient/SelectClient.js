import React from "react"

import FormInput from "../../../Components/FormInput/FormInput"
import SearchClients from "../../../Components/Search-clients/Search-clients"
import classes from "./SelectClient.module.css"

import {searchForClients} from "../../../store/actions/Search For Client/SearchForClient-action"
import { useDispatch, useSelector } from "react-redux"

const SelectClient = props => {

    const dispatch = useDispatch()

    const Clients = useSelector(state => state.searchClient.clients)

    const sendRequest = e => {

        const searchValue = e.target.value

        searchValue ? dispatch(searchForClients(searchValue)) : dispatch(searchForClients("#"))
        
    }

    return (

        <div className={classes.container}>

            <FormInput prompt={"Search for a client"} setBorder={{ height: "7vh", background: "white", marginTop: "2vh" }} placeholder="Loren Knight" handleChange={(e)=> sendRequest(e)}/>

            <SearchClients clients={Clients}/>

        </div>
    )

}

export default SelectClient