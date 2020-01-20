import axios from "axios"

export const LOGINFAILURE = "LOGINFAILURE";
export const LOGINSUCCESS = "LOGINSUCCESS";


export const login = (pin) => {

    return async dispatch => {

        const response = await axios.post('http://localhost:4000/verify', {pin: pin})

        response.data.success ? dispatch({type: LOGINSUCCESS}) : dispatch ({type:LOGINFAILURE})

     }

}
