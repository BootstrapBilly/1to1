import axios from "axios"

export const LOGINFAILURE = "LOGINFAILURE";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOCKOUT = "LOCKOUT";
export const GENERIC = "GENERIC";
export const LOGOUT = "LOGOUT";

export const login = (pin) => {

    return async dispatch => {

        try {

            const response = await axios.post('http://localhost:4000/verify', { pin: pin })//send the pin to the api 

            if (response.data.success) {//if it is correct

                localStorage.setItem("jwt", response.data.token)//store the jwt inside the local storage
                localStorage.setItem("expirationDate", new Date(new Date().getTime() + response.data.expiresIn * 1000))//set the logout timer to 41 days (3600000 returned by the api)

                return dispatch({ type: LOGINSUCCESS, token: response.data.token })//dispatch login success with the token

            }

        }

        catch (error) {

            if (error.response.status === 418) return dispatch({ type: LOCKOUT })
            if (error.response.status === 424) return dispatch({ type: LOGINFAILURE })
            if (error.response.status === 500) return dispatch({ type: GENERIC })

        }

    }

}

export const logout = () => {

    return async dispatch => {

        localStorage.removeItem("jwt");
        localStorage.removeItem("expirationDate");

        dispatch({ type: LOGOUT })

    }

}


export const try_auto_login = () => {

    return async dispatch => {

        const jwt = localStorage.getItem("jwt")
        const expirationDate = localStorage.getItem("expirationDate")

        if (!jwt) dispatch({ type: LOGOUT })
        if (new Date(expirationDate) < new Date()) dispatch({ type: LOGOUT })

        else return dispatch({type: LOGINSUCCESS, token:jwt})
    }

}