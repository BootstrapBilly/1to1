import {APPOINTMENTS_FOUND, NO_APPOINTMENTS_FOUND, GENERIC} from "../../actions/Fetch Appointments/fetch-appointment-action"

const initialState = {//set the initial state

    appointments : [],
    noAppointments : null,
    error:false

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case APPOINTMENTS_FOUND : return {...initialState, appointments: action.appointments, noAppointments:false, error:false}
        case NO_APPOINTMENTS_FOUND : return {...initialState, appointments: [], noAppointments: true, error:false}
        case GENERIC : return { ...initialState, appointments:[], noAppointments: false, error:true} 
        default: return state

    }

}

export default reducer
