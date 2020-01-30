import React from "react"

import Form from "../../Containers/Form/Form"

import Header from "../../Containers/Header/Header"

const NewClient = props => {

    return (

    <div test-handle="container">

        <Header text={"Add a new client"} test-handle="header"/>

        <Form test-handle="form" />

        <div test-handle="submit"></div>
        
    </div>
    
    )

}

export default NewClient