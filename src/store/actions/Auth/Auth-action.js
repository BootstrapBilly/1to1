import axios from "axios"

export const LOGINFAILURE = "LOGINFAILURE";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOCKOUT = "LOCKOUT";
export const GENERIC = "GENERIC";


export const login = (pin) => {

    return async dispatch => {

        try {

            const response = await axios.post('http://localhost:4000/verify', { pin: pin })
            if (response.data.success) return dispatch({ type: LOGINSUCCESS })

        }

        catch (error) {

            if (error.response.status === 418) return dispatch({ type: LOCKOUT })
            if (error.response.status === 424) return dispatch({ type: LOGINFAILURE })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}