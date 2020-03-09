import sendPost from "../util/sendPostReq"

export const SET_SELECTED_APPOINTMENT = "SET_SELECTED_APPOINTMENT"
export const APPOINTMENT_DELETED = "APPOINTMENT_DELETED"
export const SET_SELECTED_CELL = "SET_SELECTED_CELL"

export const dispatch_set_selected_appointment = (appointment) => {

    return async dispatch => {

        return dispatch({
            type:SET_SELECTED_APPOINTMENT,
            payload:appointment
        })

    }

}

export const sendDeleteAppointment = (id) => {

    return async (dispatch, state) => {

        try {

            const response = await sendPost("deleteAppointment", { id: id }, state().auth.token)

            if (response.data.success) dispatch({ type: APPOINTMENT_DELETED, payload:id})
            

        }

        catch (error) {

            return console.log("failure")
            // if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}

export const set_selected_cell = (cell) => {

    return async dispatch => {

        return dispatch({
            type:SET_SELECTED_CELL,
            cell:cell
        })

    }

}