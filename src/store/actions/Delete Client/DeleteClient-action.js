import sendPost from "../util/sendPostReq"

export const DELETE_SUCCESS = "APPOINTMENTS_FOUND"
export const CLEAR_DELETED = "CLEAR_DELETED"

export const deleteClient = (name) => {

    return async (dispatch, state) => {

        console.log(name)

        try {

            const response = await sendPost("deleteClient", { name: name }, state().auth.token, state().auth.refreshToken)

            if (response.data.success) return dispatch({ type: DELETE_SUCCESS, deletedClient: name })

        }

        catch (error) {

            // return dispatch({ type: DELETE_FAILURE })

        }

    }

}

export const clearDeleted = () => {

    return async dispatch => {

        return dispatch({type: CLEAR_DELETED})
    }
}
