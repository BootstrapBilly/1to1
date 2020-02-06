import sendPost from "../util/sendPostReq"

export const CLIENTS_FOUND = "CLIENTS_FOUND"
export const NO_CLIENTS_FOUND = "NO_CLIENTS_FOUND"
export const GENERIC = "GENERIC"


export const searchForClients = (clientName) => {

    return async (dispatch, state) => {

        try {

            const response = await sendPost("searchForClients", { name: clientName }, state().auth.token)
            if (response.data.success) return dispatch({ type: CLIENTS_FOUND, clients: response.data.clients })

        }

        catch (error) {

            if (error.response.status === 404) return dispatch({ type: NO_CLIENTS_FOUND })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}
