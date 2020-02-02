import React from "react"
import classes from "./Add-to-grid.module.css"

import FormInput from "../../Components/FormInput/FormInput"
import SearchClients from "../../Components/Search-clients/Search-clients"

const AddToGrid = props => {

    return (

        <div className={classes.container}>

            <FormInput prompt={"Search for a client"} setBorder={{height:"7vh", background:"white", marginTop:"2vh"}} placeholder="Loren Knight"/>

            <SearchClients clients={["A", "b", "c"]}/>

        </div>
    )

}

export default AddToGrid