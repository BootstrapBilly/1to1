import {SET_SELECTED_APPOINTMENT, APPOINTMENT_DELETED, SET_SELECTED_CELL} from "../../actions/SelectedAppointment/SelectedAppointment-action"

const initialState = {//set the initial state

    selectedAppointment : null,
    deletedId: null,
    selectedCell: null

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SELECTED_APPOINTMENT: return {...initialState, selectedAppointment:action.payload}
        case APPOINTMENT_DELETED: return {...initialState, selectedAppointment:null, deletedId: action.payload}
        case SET_SELECTED_CELL: return {...initialState, selectedCell:action.cell}
        default: return state

    }

}

export default authReducer
