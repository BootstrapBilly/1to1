import {LOGINFAILURE, LOGINSUCCESS} from "../../actions/Auth/Auth-action"

const initialState = {//set the initial state

    loggedIn: false,
    validationFailure: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGINFAILURE: return { ...initialState, validationFailure: true}

        case LOGINSUCCESS: return { ...initialState, validationFailure: false, loggedIn:true}

        default: return state

    }

}

export default authReducer
