import {LOGINFAILURE, LOGINSUCCESS, LOCKOUT, GENERIC, LOGOUT} from "../../actions/Auth/Auth-action"

const initialState = {//set the initial state

    loggedIn: false,
    token:null,
    validationFailure: false,
    lockout: false,
    genericError:false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGINFAILURE: return { ...initialState, validationFailure: true}

        case LOGINSUCCESS: return { ...initialState, validationFailure: false, loggedIn:true, token:action.token}

        case LOCKOUT: return { ...initialState, validationFailure: false, loggedIn:false, lockout:true}
        
        case GENERIC: return { ...initialState, validationFailure: false, loggedIn:false, lockout:false, genericError: true}

        case LOGOUT: return { ...initialState, validationFailure: false, loggedIn:false, lockout:false, genericError: false}

        default: return state

    }

}

export default authReducer
