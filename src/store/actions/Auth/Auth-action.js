import axios from "axios"

export const LOGINFAILURE = "LOGINFAILURE";
export const LOGINSUCCESS = "LOGINSUCCESS";


export const login = (pin) => {

    return async dispatch => {

        try {

            const response = await axios.post('http://localhost:4000/verify', { pin: pin })

            if (response.data.success) return dispatch({ type: LOGINSUCCESS })

        }

        catch (error) { dispatch({type: LOGINFAILURE}) }

    }

}