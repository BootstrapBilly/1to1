import sendPost from "../util/sendPostReq"
import { reset } from "../Add Appointment/Add-Appointment-action"

export const SET_CLIENT_TO_DISPLAY = "SET_CLIENT_TO_DISPLAY"
export const CLEAR_DISPLAYED_CLIENT = "CLEAR_DISPLAYED_CLIENT"
export const CLIENT_UPDATED_SUCCESSFULLY = "CLIENT_UPDATED_SUCCESSFULLY"
export const CLIENT_NAME_TAKEN = "CLIENT_NAME_TAKEN"
export const CLEAR_UPDATE_STATUSES = "CLEAR_UPDATE_STATUSES"


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
export const updateClient = (clientDetails) => {

    
    return async (dispatch, state) => {
        
        try {

           
            const response = await sendPost("updateClient", {clientDetails:clientDetails}, state().auth.token)//post the appointment details and the jwt to api
            

            if (response.data.success) return dispatch({ type: CLIENT_UPDATED_SUCCESSFULLY, newName: clientDetails.name})//if the response is a success, dispatch the success action

        }

        catch (error) {

            if (error.response.status === 424) return dispatch({ type: CLIENT_NAME_TAKEN })
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

export const clearUpdateStatuses = () => {

    return async dispatch => {
        
        return dispatch({ type: CLEAR_UPDATE_STATUSES})

    }
}
