import {LOGINFAILURE, LOGINSUCCESS, LOCKOUT, GENERIC} from "../../actions/Auth/Auth-action"

const initialState = {//set the initial state

    loggedIn: false,
    validationFailure: false,
    lockout: false,
    genericError:false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGINFAILURE: return { ...initialState, validationFailure: true}

        case LOGINSUCCESS: return { ...initialState, validationFailure: false, loggedIn:true}

        case LOCKOUT: return { ...initialState, validationFailure: false, loggedIn:false, lockout:true}
        
        case GENERIC: return { ...initialState, validationFailure: false, loggedIn:false, lockout:false, genericError: true}

        default: return state

    }

}

export default authReducer
