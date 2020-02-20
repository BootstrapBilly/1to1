import {SET_SELECTED_APPOINTMENT, APPOINTMENT_DELETED} from "../../actions/SelectedAppointment/SelectedAppointment-action"

const initialState = {//set the initial state

    selectedAppointment : null,
    deletedId: null

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SELECTED_APPOINTMENT: return {...initialState, selectedAppointment:action.payload}
        case APPOINTMENT_DELETED: return {...initialState, selectedAppointment:null, deletedId: action.payload}
        default: return state

    }

}

export default authReducer
