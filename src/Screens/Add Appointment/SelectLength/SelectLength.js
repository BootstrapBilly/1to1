import React from "react"
import classes from "./selectLength.module.css"

import { useSelector } from "react-redux"

const SelectLength = props => {

    const appointments = useSelector(state => state.fetchAppointments.appointments)//get the appointment data fetched from the api

    const currentCol = props.cell.slice(3, 4)
    const currentRow = props.cell.slice(8)

    let options = [30, 45, 60]

    const setOptions = () => {

    switch (currentCol) {

        case "1":

            if (appointments.find(item => item.col === (parseInt(currentCol) + 1).toString() && item.row === currentRow)) return options = []
            if (appointments.find(item => item.col === (parseInt(currentCol) + 2).toString() && item.row === currentRow)) return options = [30]
            if (appointments.find(item => item.col === (parseInt(currentCol) + 3).toString() && item.row === currentRow)) return options = [30, 45]

        case "2":

            if (appointments.find(item => item.col === (parseInt(currentCol) + 1).toString() && item.row === currentRow)) return options = []
            if (appointments.find(item => item.col === (parseInt(currentCol) + 2).toString() && item.row === currentRow)) return options = [30]
            if (appointments.find(item => item.col === (parseInt(currentCol) - 1).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30, 45]

        case "3":

            if (appointments.find(item => item.col === (parseInt(currentCol) + 1).toString() && item.row === currentRow)) return options = []
            if (appointments.find(item => item.col === (parseInt(currentCol) - 2).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30]
            if (appointments.find(item => item.col === (parseInt(currentCol) - 1).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30, 45]

        case "4":

            if (appointments.find(item => item.col === (parseInt(currentCol) - 3).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = []
            if (appointments.find(item => item.col === (parseInt(currentCol) - 2).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30]
            if (appointments.find(item => item.col === (parseInt(currentCol) - 1).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30, 45]

    }

}

setOptions()

    return (

        <div className={classes.container}>

            <span className={classes.headerText}>Select an appointment length</span>

            <div className={classes.mainOption} onClick={props.onClickOption.bind(this, 15)}><span>15</span><span>Minutes</span></div>

            <div className={classes.otherOptions}>

                {options.map(item => <div className={classes.option} onClick={props.onClickOption.bind(this, item)} key={item}>{item}<span>Minutes</span></div>)}

            </div>

        </div>

    )

}

export default SelectLength