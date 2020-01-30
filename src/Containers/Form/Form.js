import React from "react"
import classes from "./Form.module.css"


const Form = props => {

    return (

        <div test-handle="container" className={classes.container}>

            <div className={classes.inputContainer}>

                <span className={classes.promptText}>NAME :</span>
                <input test-handle="name" className={classes.input} placeholder="Loren Knight" />

            </div>

            <div className={classes.inputContainer}>

                <span className={classes.promptText}>PHONE NUMBER :</span>
                <input test-handle="number" className={classes.input} placeholder="07684485839"/>

            </div>

            <div className={classes.inputContainer}>

                <span className={classes.promptText}>NOTES :</span>
                <textarea test-handle="notes" className={classes.input} placeholder="Buys lots of products and is never late" style={{height:"10vh", marginTop:"1vh", fontSize:"1.3rem"}} />

            </div>

            <button className={classes.button}>ADD</button>

        </div>

    )

}

export default Form