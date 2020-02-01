import React from "react"
import classes from "./Search-clients.module.css"

const SearchClients = props => {

    return (

        <div className={classes.container}>

            {["Loren Knight","Scarlett Knight","Abdullah Mohammed","Prosperity Madengo","Olubisi Akanmu","Dave Daveson","Jeff Bezos","Catherine Taylor","Jimmy James Joe", "Yes"].map(item => {

                return <div className={classes.clientContainer} key={item}><span className={classes.text}>{item}</span></div>

            })}

        </div>
        
    )

}

export default SearchClients