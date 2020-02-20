export const SET_SELECTED_APPOINTMENT = "SET_SELECTED_APPOINTMENT"

export const currentlySelectedAppointment = (id) => {

    return async dispatch => {

        return dispatch({
            type:SET_SELECTED_APPOINTMENT,
            payload:id
        })

    }

}
