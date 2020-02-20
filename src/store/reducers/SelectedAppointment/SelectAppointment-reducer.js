import {SET_SELECTED_APPOINTMENT} from "../../actions/SelectedAppointment/SelectedAppointment-action"

const initialState = {//set the initial state

    selectedAppointment : null

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SELECTED_APPOINTMENT: return {...initialState, selectedAppointment:action.payload}
        default: return state

    }

}

export default authReducer
