//react
import React from "react"

//external
import PropTypes from "prop-types"

//css
import classes from "./selectLength.module.css"

//redux hooks
import { useSelector } from "react-redux"

const SelectLength = props => {

    const appointments = useSelector(state => state.fetchAppointments.appointments)//get the appointment data fetched from the api

    const currentCol = props.cell.slice(3, 4)//extract the current column from the passed in cell
    const currentRow = props.cell.slice(8)//extract the current row from the pass in cell

    let options = [30, 45, 60]//set the default options (30, 45, 60) - This is modified by the switch case below - 15 mins is always added by default (check the render method)

    const setOptions = () => {

    switch (currentCol) {//switch the column of where the first cell of the appointment starts (the column of the cell where the user clicked to trigger this process)

        case "1": //the appointment starts in the first column

            //if there as an appointment which starts in the next cell, on the same row, there is only space for a 15 min appointment (1 cell)
            if (appointments.find(item => item.col === (parseInt(currentCol) + 1).toString() && item.row === currentRow)) return options = []
            //if there is an appointment which starts two cells away, on the same row, there is space for a 30 min appointment (2 cells)
            if (appointments.find(item => item.col === (parseInt(currentCol) + 2).toString() && item.row === currentRow)) return options = [30]
            //if there is an appointment which starts three cells away, on the same row, there is space for a 45 min appointment (3 cells)
            if (appointments.find(item => item.col === (parseInt(currentCol) + 3).toString() && item.row === currentRow)) return options = [30, 45]

            //otherwise, there is space for a 60 min appointment (4 cells)

            break;

        case "2": //if the appointment starts in the second column

            if (appointments.find(item => item.col === (parseInt(currentCol) + 1).toString() && item.row === currentRow)) return options = []
            if (appointments.find(item => item.col === (parseInt(currentCol) + 2).toString() && item.row === currentRow)) return options = [30]
            //if there is an appointment which starts 3 cells away, on the next row (because this appointment starts from column 2), there is room for a 45 min appointment
            if (appointments.find(item => item.col === (parseInt(currentCol) - 1).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30, 45]
            
            //otherwise there is space for a 60  in appointment (4 cells)
            break;

        case "3":

            if (appointments.find(item => item.col === (parseInt(currentCol) + 1).toString() && item.row === currentRow)) return options = []
            if (appointments.find(item => item.col === (parseInt(currentCol) - 2).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30]
            if (appointments.find(item => item.col === (parseInt(currentCol) - 1).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30, 45]

            break;

        case "4":

            if (appointments.find(item => item.col === (parseInt(currentCol) - 3).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = []
            if (appointments.find(item => item.col === (parseInt(currentCol) - 2).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30]
            if (appointments.find(item => item.col === (parseInt(currentCol) - 1).toString() && item.row === (parseInt(currentRow) + 1).toString())) return options = [30, 45]

            break;

            default: return options = []

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

SelectLength.propTypes = {

    cell:PropTypes.string,
    onClickOption: PropTypes.func,

}

export default SelectLength