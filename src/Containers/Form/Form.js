import React from "react"
import classes from "./Form.module.css"


const Form = props => {

    return (

        <div test-handle="container" className={classes.container}>

            <div className={classes.inputContainer} test-handle="name-container">

                <span className={classes.promptText} test-handle="name-prompt">NAME :</span>
                <input className={classes.input} placeholder="Loren Knight" test-handle="name-input" />

            </div>

            <div className={classes.inputContainer} test-handle="number-container">

                <span className={classes.promptText} test-handle="number-prompt">PHONE NUMBER :</span>
                <input className={classes.input} placeholder="07684485839" test-handle="number-input"/>

            </div>

            <div className={classes.inputContainer} test-handle="notes-container">

                <span className={classes.promptText} test-handle="notes-prompt">NOTES :</span>
                <textarea className={classes.input} test-handle="notes-input" placeholder="Buys lots of products and is never late" style={{height:"10vh", marginTop:"1vh", fontSize:"1.3rem"}} />

            </div>

            <button className={classes.button} test-handle="button">ADD</button>

        </div>

    )

}

export default Form