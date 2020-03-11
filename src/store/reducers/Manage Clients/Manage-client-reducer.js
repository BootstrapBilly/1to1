import {SET_CLIENT_TO_DISPLAY, CLEAR_DISPLAYED_CLIENT, CLIENT_UPDATED_SUCCESSFULLY, CLIENT_NAME_TAKEN, CLEAR_UPDATE_STATUSES} from "../../actions/Manage Clients/Manage-client-action"

const initialState = {//set the initial state

    clientToDisplay : null,
    nameTaken: false,
    clientUpdated: false

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CLIENT_TO_DISPLAY : return {...initialState, clientToDisplay: action.client }
        case CLEAR_DISPLAYED_CLIENT : return {...initialState, clientToDisplay: null }
        case CLIENT_UPDATED_SUCCESSFULLY : return {...initialState, clientUpdated:true}
        case CLIENT_NAME_TAKEN : return {...initialState, nameTaken:true }
        case CLEAR_UPDATE_STATUSES : return {...initialState, nameTaken:false, clientUpdated:false }
        default: return state

    }

}

export default reducer
