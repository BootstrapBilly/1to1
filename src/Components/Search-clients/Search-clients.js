import React from "react"
import classes from "./Search-clients.module.css"

const SearchClients = props => {

    return (

        <div className={classes.container}>

            {props.clients.map(item => {

                return <div className={classes.clientContainer} key={item}><span className={classes.text}>{item}</span></div>

            })}

        </div>
        
    )

}

export default SearchClients