import axios from "axios"

export const APPOINTMENTS_FOUND = "APPOINTMENTS_FOUND"
export const NO_APPOINTMENTS_FOUND = "NO_APPOINTMENTS_FOUND"
export const GENERIC = "GENERIC"

export const fetchAppointments = (customerDetails) => {

    return async dispatch => {

        try {

            const response = await axios.post('http://localhost:4000/fetchAppointments', { customerDetails: customerDetails })
            if (response.data.success) return dispatch({ type: APPOINTMENTS_FOUND })

        }

        catch (error) {

            if (error.response.status === 404) return dispatch({ type: NO_APPOINTMENTS_FOUND })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}

export const resetForm = () => {

    return async dispatch => dispatch({type:RESET})
    
}