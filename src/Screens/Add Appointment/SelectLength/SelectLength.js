import React from "react"
import classes from "./selectLength.module.css"

const SelectLength = props => {

    return (

        <div className={classes.container}>

            <span className={classes.headerText}>Select an appointment length</span>

            <div className={classes.mainOption} onClick={props.onClickOption.bind(this, 15)}><span>15</span><span>Minutes</span></div>

            <div className={classes.otherOptions}>

                {[30,45,60].map(item => <div className={classes.option} onClick={props.onClickOption.bind(this, item)} key={item}>{item}<span>Minutes</span></div>)}

            </div>

        </div>

    )

}

export default SelectLength