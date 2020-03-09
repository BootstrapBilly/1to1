import sendPost from "../util/sendPostReq"

export const SET_CLIENT_TO_DISPLAY = "SET_CLIENT_TO_DISPLAY"
export const CLEAR_DISPLAYED_CLIENT = "CLEAR_DISPLAYED_CLIENT"


export const setClientToDisplay = (client) => {

    return async (dispatch, state) => {
        
        try {

            const response = await sendPost("findClient", {client:client}, state().auth.token)//post the appointment details and the jwt to api

            if (response.data.success) return dispatch({ type: SET_CLIENT_TO_DISPLAY, client: response.data.client})//if the response is a success, dispatch the success action

        }

        catch (error) {

            console.log(error)
            // if (error.response.status === 500) return dispatch({ type: SUBMISSION_FAILURE })//if there are any errors, dispatch the error action
            // return dispatch({ type: SUBMISSION_FAILURE })

        }

    }

}

export const clearDisplayedClient = () => {

    return async dispatch => {
        
        return dispatch({ type: CLEAR_DISPLAYED_CLIENT})

    }
}
