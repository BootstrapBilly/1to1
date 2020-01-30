import axios from "axios"

export const SUBMISSIONFAILURE = "SUBMISSIONFAILURE"
export const SUBMISSIONSUCCESS = "SUBMISSIONSUCCESS"
export const RESET = "RESET"
export const GENERIC = "GENERIC"

export const addNewClient = (pin) => {

    return async dispatch => {

        try {

            const response = await axios.post('http://localhost:4000/addNewClient', { pin: pin })
            if (response.data.success) return dispatch({ type: SUBMISSIONSUCCESS })

        }

        catch (error) {

            if (error.response.status === 424) return dispatch({ type: SUBMISSIONFAILURE })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}