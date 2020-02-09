import sendPost from "../util/sendPostReq"

export const SET_CLIENT = "SET_CLIENT"
export const SUBMISSION_SUCCESS = "SUBMISSION_SUCCESS"
export const SUBMISSION_FAILURE = "SUBMISSION_FAILURE"
export const RESET = "RESET"

export const setAppointmentHolder = (clientName) => {

    return async dispatch => {

        try {

            return dispatch({type:SET_CLIENT, clientName: clientName})//set the appointment to the given clientname

        }

        catch (error){

            return

        }
    }
}

export const addAppointment = (appointmentDetails) => {

    return async (dispatch, state) => {

        try {

            const response = await sendPost("addAppointment", { appointmentDetails: appointmentDetails }, state().auth.token)//post the appointment details and the jwt to api
            if (response.data.success) return dispatch({ type: SUBMISSION_SUCCESS })//if the response is a success, dispatch the success action

        }

        catch (error) {

            if (error.response.status === 500) return dispatch({ type: SUBMISSION_FAILURE })//if there are any errors, dispatch the error action
            return dispatch({ type: SUBMISSION_FAILURE })

        }

    }

}

export const reset = () => {

    return async dispatch => {

        try {

            return dispatch({type:RESET}) //dispatch the reset action to reset the appointment holder

        }

        catch (error){

            return

        }
    }
}