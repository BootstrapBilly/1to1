import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import authReducer from "./store/reducers/Auth/Auth-reducer"
import newClientReducer from "./store/reducers/New Client/NewClient-reducer"

// import Grid from "./Containers/Grid/Grid"
//import App from './App';
//import Dashboard from './Screens/Dashboard/Dashboard';
//import NewClient from "./Screens/NewClient/NewClient"
import AddAppointment from "./Screens/Add Appointment/Add-appointment"


require('react-web-vector-icons/fonts');


export const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  auth: authReducer,
  newClient: newClientReducer

})

export const middlewares = [reduxThunk]

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><AddAppointment /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
