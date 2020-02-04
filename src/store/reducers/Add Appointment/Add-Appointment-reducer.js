import {SET_CLIENT, SUBMISSION_SUCCESS, SUBMISSION_FAILURE, RESET} from "../../actions/Add Appointment/Add-Appointment-action"

const initialState = {//set the initial state

  clientName: null,
  appointmentAdded: false,
  error:false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CLIENT: return {...initialState, clientName:action.clientName};
        case SUBMISSION_SUCCESS: return { ...initialState, clientName: null, appointmentAdded: true, error:false};
        case SUBMISSION_FAILURE: return { ...initialState, error:true};
        case RESET: return { ...initialState, clientName:null, appointmentAdded:false, error:false};
        default: return state

    }

}

export default authReducer
