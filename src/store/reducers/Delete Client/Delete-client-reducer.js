import {DELETE_SUCCESS, CLEAR_DELETED} from "../../actions/Delete Client/DeleteClient-action"

const initialState = {//set the initial state

    deletedClient: null

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case DELETE_SUCCESS : return {...initialState, deletedClient:action.deletedClient}
        case CLEAR_DELETED : return {...initialState, deletedClient:null}
 
        default: return state

    }

}

export default reducer
