import axios from "axios"

export const CLIENTS_FOUND = "CLIENTS_FOUND"
export const NO_CLIENTS_FOUND = "NO_CLIENTS_FOUND"
export const GENERIC = "GENERIC"


export const searchForClients = (clientName) => {

    return async dispatch => {

        try {

            const response = await axios.post('http://localhost:4000/searchForClients', { clientName: clientName })
            if (response.data.success) return dispatch({ type: CLIENTS_FOUND, clients: response.data.clients })

        }

        catch (error) {

            if (error.response.status === 404) return dispatch({ type: NO_CLIENTS_FOUND })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}
