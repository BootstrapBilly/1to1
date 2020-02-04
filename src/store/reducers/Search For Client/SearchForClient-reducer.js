import {CLIENTS_FOUND, NO_CLIENTS_FOUND, GENERIC} from "../../actions/Search For Client/SearchForClient-action"
import {RESET} from "../../actions/Add Appointment/Add-Appointment-action"

const initialState = {//set the initial state

    clients : [],
    noClients : null,
    error : null

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case CLIENTS_FOUND: return {...initialState, clients:action.clients, noClients:false, error:null}
        case NO_CLIENTS_FOUND: return {...initialState, clients:[], noClients:true, error:null}
        case GENERIC: return {...initialState, clients:[], noClients:null, error:true}
        case RESET: return {...initialState, clients:[], noClients:null, error:null}
        default: return state

    }

}

export default authReducer
