import sendPost from "../util/sendPostReq"

export const APPOINTMENT_MOVED_SUCCESSFULLY = "APPOINTMENT_MOVED_SUCCESSFULLY"
export const RESET = "RESET"

export const moveAppointment = (cell, id) => {

    return async (dispatch, state) => {

        try {

            const response = await sendPost("moveAppointment", { cell: cell, id: id }, state().auth.token)//post the appointment details and the jwt to api

            if (response.data.success) return dispatch({ type: APPOINTMENT_MOVED_SUCCESSFULLY })//if the response is a success, dispatch the success action

        }

        catch (error) {

            console.log(error)
            // if (error.response.status === 500) return dispatch({ type: SUBMISSION_FAILURE })//if there are any errors, dispatch the error action
            // return dispatch({ type: SUBMISSION_FAILURE })

        }

    }

}

export const reset_moved_appointment_indicator = () => {

    return async dispatch => {

        try {

            return  dispatch({ type: RESET })
        }

        catch (error) {

            console.log(error)

        }

    }

}

