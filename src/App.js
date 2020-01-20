//core react
import React from 'react';

//external
import {createStore, combineReducers, applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {Provider} from "react-redux"

//screens
import Authentication from "../src/Screens/Authentication/Authentication"

//reducers
import authReducer from "./store/reducers/Auth/Auth-reducer"

export const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  auth: authReducer,

})

export const middlewares = [reduxThunk]

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

function App() {

  return (
    
    <Provider store={store}><Authentication /></Provider>

  );

}

export default App;
