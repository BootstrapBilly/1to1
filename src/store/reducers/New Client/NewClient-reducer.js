import {SUBMISSIONFAILURE, SUBMISSIONSUCCESS, RESET, GENERIC} from "../../actions/New Client/NewClient-action"

const initialState = {//set the initial state

    submissionFailure : null,
    successfulAddition : null,
    genericError: null,

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SUBMISSIONFAILURE : return { ...initialState, submissionFailure : true}
        case SUBMISSIONSUCCESS : return { ...initialState, successfulAddition : true}
        case RESET : return { ...initialState, submissionFailure : false, successfulAddition : null, genericError: null}
        case GENERIC : return { ...initialState, genericError: true}
        default: return state

    }

}

export default authReducer
