//core react
import React from "react"

//redux hooks
import { useSelector } from "react-redux"

//functions
import highlight_available_cells from "./functions/highlight_available_cells"
import compute_classname from "./functions/compute_classname"

import classes from "./cell.module.css"

const Cell = (props) => {

    //_config
    const cellData = props.column.find(item => item[0] === props.rowNumber)//search the given props.column to see if any of its rows have appointment data

    //-Selectors
    const currentSelectedAppointment = useSelector(state => state.selectedAppointment.selectedAppointment)

    if (cellData) {//The cell is not empty

        const client_name = cellData[2]
        const appointment_length = cellData[3]
        const appointment_id = cellData[4]
        const special_style = cellData[5]

        return (

            <div

                test-handle={`${props.colNumber}-seg${props.rowNumber}`}
                className={classes.rowSegment}
                key={props.rowNumber}
                onClick={props.onClickActive.bind(this, { length: appointment_length, id: appointment_id })}

            >

                <div test-handle={`${client_name}`} className={compute_classname(special_style, props, appointment_length, classes, props.rescheduleMode)}>
                
                    {client_name}

                    {
                    //props.colNumber === "col4" ? <div className={classes.test}>{props.time}</div> : null
                    }

                    {currentSelectedAppointment && props.rescheduleMode && appointment_id === currentSelectedAppointment.id && (special_style !== "first" && special_style !== "overFlowFirst") && currentSelectedAppointment.length !== 15 ? highlight_available_cells(currentSelectedAppointment, props, true, classes) : null}


                </div>

            </div>)

    }

    //If the cell is empty, and reschedule mode is //*active
    else if (!cellData && (props.rescheduleMode) && currentSelectedAppointment) return (highlight_available_cells(currentSelectedAppointment, props, false, classes))

    //If the cell is empty and reschedule mode is //!Not active
    else return (

        <div

            test-handle={`${props.colNumber}-seg${props.rowNumber}`}
            className={classes.rowSegment} key={props.rowNumber}
            onClick={props.onClickEmpty.bind(this, `${props.colNumber}-seg${props.rowNumber}`)}>

{
//props.colNumber === "col4" ? <div className={classes.testNoData}>{props.time}</div> : null
}

        </div>

    )

}

export default Cell