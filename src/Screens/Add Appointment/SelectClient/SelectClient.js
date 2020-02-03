import React from "react"

import FormInput from "../../../Components/FormInput/FormInput"
import SearchClients from "../../../Components/Search-clients/Search-clients"

const SelectClient = props => {

    return (

        <div>

            <FormInput prompt={"Search for a client"} setBorder={{ height: "7vh", background: "white", marginTop: "2vh" }} placeholder="Loren Knight" />

            <SearchClients clients={["A", "b", "c"]} />

        </div>
    )

}

export default SelectClient