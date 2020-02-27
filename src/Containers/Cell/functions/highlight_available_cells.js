import React from "react"

const highlight_available_cells = (currentSelectedAppointment, props, selected, classes) => {

    let cellType = selected ? <div className={classes.availableSelected}></div> :
    
    <div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={classes.rowSegment} key={props.rowNumber} onClick={props.onClickAvailable}>

        <div className={classes.available}></div>

    </div>

    const appointments_minus_currently_selected_appointment = props.appointments.filter(appointment => appointment._id !== currentSelectedAppointment.id)

    const checkCells = maxCount => {

        let cells_checked = 0

        for (const cell of props.nextFourCells) {

            appointments_minus_currently_selected_appointment.forEach(appointment => {

                if (appointment.row === cell.row && (appointment.col === cell.col) && cells_checked < maxCount) {

                    return cellType = <div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={classes.rowSegment} key={props.rowNumber} onClick={props.onClickEmpty.bind(this, `${props.colNumber}-seg${props.rowNumber}`)}
                    >
                        {selected ? null : <div className={classes.notAvailable}></div>}

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

    }

    return (<React.Fragment>{cellType}</React.Fragment>)

}

export default highlight_available_cells