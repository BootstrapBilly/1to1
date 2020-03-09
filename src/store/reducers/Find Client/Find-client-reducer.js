import {SET_CLIENT_TO_DISPLAY, CLEAR_DISPLAYED_CLIENT} from "../../actions/Find Client/Find-client-action"

const initialState = {//set the initial state

    clientToDisplay : null,

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CLIENT_TO_DISPLAY : return {...initialState, clientToDisplay: action.client }
        case CLEAR_DISPLAYED_CLIENT : return {...initialState, clientToDisplay: null }
        default: return state

    }

}

export default reducer
