import React from "react"

const highlight_available_cells = (currentSelectedAppointment, props, selected) => {

    let cellType = selected ? <div className={props.classes.test}></div> :
    
    <div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.rowSegment} key={props.rowNumber}>

        <div className={props.classes.available}></div>

    </div>

    const appointments_minus_currently_selected_appointment = props.appointments.filter(appointment => appointment._id !== currentSelectedAppointment.id)

    const checkCells = maxCount => {

        let cells_checked = 0

        for (const cell of props.nextFourCells) {

            appointments_minus_currently_selected_appointment.forEach(appointment => {

                if (appointment.row === cell.row && (appointment.col === cell.col) && cells_checked < maxCount) {

                    return cellType = <div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.rowSegment} key={props.rowNumber} onClick={props.onClickEmpty.bind(this, `${props.colNumber}-seg${props.rowNumber}`)}
                    >
                        {selected ? null : <div className={props.classes.notAvailable}></div>}

                    </div>
                }

            })

            cells_checked ++
        }

    }


    switch (currentSelectedAppointment.length) {

        case 30: checkCells(2) 
        break;

        case 45: checkCells(3) 
        break;

        case 60: checkCells(4) 
        break;

        default: return

    }

    return (<React.Fragment>{cellType}</React.Fragment>)

}

export default highlight_available_cells