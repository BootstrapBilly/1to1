import sendPost from "../util/sendPostReq"

export const SUBMISSIONFAILURE = "SUBMISSIONFAILURE"
export const SUBMISSIONSUCCESS = "SUBMISSIONSUCCESS"
export const RESET = "RESET"
export const GENERIC = "GENERIC"

export const addNewClient = (customerDetails) => {

    return async (dispatch, state) => {

        try {

            const response = await sendPost("addNewClient", { customerDetails: customerDetails }, state().auth.token)
            if (response.data.success) return dispatch({ type: SUBMISSIONSUCCESS })

        }

        catch (error) {

            if (error.response.status === 424) return dispatch({ type: SUBMISSIONFAILURE })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}

export const resetForm = () => {

    return async dispatch => dispatch({type:RESET})
    
}