import {APPOINTMENT_MOVED_SUCCESSFULLY, RESET} from "../../actions/Move Appointment/Move-Appointment-action"

const initialState = {//set the initial state

    appointment_moved : false

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case APPOINTMENT_MOVED_SUCCESSFULLY : return {...initialState, appointment_moved:true}
        case RESET : return {...initialState, appointment_moved:false}

        default: return state

    }

}

export default reducer
