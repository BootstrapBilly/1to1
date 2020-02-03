import React from "react"
import classes from "./Search-clients.module.css"

const SearchClients = props => {


    const Clients = []
    
    props.clients.forEach(item => Clients.push(item.name))

    return (

        <div className={classes.container}>

            {Clients.map(item => {

                return <div className={classes.clientContainer} key={item}><span className={classes.text}>{item}</span></div>

            })}

        </div>
        
    )

}

export default SearchClients