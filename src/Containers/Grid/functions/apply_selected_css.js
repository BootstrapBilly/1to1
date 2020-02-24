const apply_selected_css = (given_column, selected_row, classes, currentSelectedAppointment, rescheduleMode) => {

    console.log(rescheduleMode)

    if (!currentSelectedAppointment) return null //if there is no currently selected appointment, return

    let classname = null //define the classname to be returned

    given_column.forEach(cell => { //loop through each cell in the given column from top to bottom (1-9)

        const row = cell[0]//store the row of the current cell
        const id = cell[4]//store the id of the current cell

        if (row === selected_row) { //if the row matches the row of the selected appointment

            if (id === currentSelectedAppointment.id) {//and the id matches the selected id

                classname = rescheduleMode ? classes.selectedReschedule : classes.selected //apply the selected classname

            }
        }

    })

    return classname //then return the classname

}

export default apply_selected_css