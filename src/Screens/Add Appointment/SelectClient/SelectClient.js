//react
import React, { useEffect } from "react"

//components
import FormInput from "../../../Components/FormInput/FormInput"
import SearchResults from "./DisplaySearchResults/DisplaySearchResults"

//css
import classes from "./SelectClient.module.css"

//redux actions
import {searchForClients} from "../../../store/actions/Search For Client/SearchForClient-action"

//redux hooks
import { useDispatch, useSelector } from "react-redux"

const SelectClient = props => {

    //_config
    const dispatch = useDispatch()//initialise the action dispatcher hook

    //-selectors
    const Clients = useSelector(state => state.searchClient.clients)//grab the list of clients stored in the redux state(Dispatched every key change by the form input)

    const sendRequest = e => {

        const searchValue = e.target.value//extract the search string from the form input
        searchValue ? dispatch(searchForClients(searchValue)) : dispatch(searchForClients("#"))//unless the box is empty, dispatch a search with the current value of the input
        
    }

useEffect(()=> {

    dispatch(searchForClients("#"))
    // eslint-disable-next-line
}, [])


    return (

        <div className={classes.container}>

            <FormInput inputTitle={"Search for a client"} overWriteStyle={{background: "white", marginTop: "2vh", paddingBottom: "1vh"}} placeholder="Loren Knight" handleChange={(e)=> sendRequest(e)}/>

            <SearchResults clients={Clients} findClient={props.findClient ? true : false} />

        </div>
    )

}

export default SelectClient