import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import authReducer from "./store/reducers/Auth/Auth-reducer"
import newClientReducer from "./store/reducers/New Client/NewClient-reducer"
import searchClientReducer from "./store/reducers/Search For Client/SearchForClient-reducer"
import addAppointmentReducer from "./store/reducers/Add Appointment/Add-Appointment-reducer"
import fetchAppointmentsReducer from "./store/reducers/Fetch Appointments/fetch-appointment-reducer"
import selectedAppointmentReducer from "./store/reducers/SelectedAppointment/SelectAppointment-reducer"
import moveAppointmentReducer from "./store/reducers/Move Appointment/Move-Appointment-reducer"

// import Grid from "./Containers/Grid/Grid"
import App from './App';
// import Dashboard from './Screens/Dashboard/Dashboard';
// import NewClient from "./Screens/NewClient/NewClient"
// import AddAppointment from "./Screens/Add Appointment/Add-appointment"


require('react-web-vector-icons/fonts');

// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


export const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  auth: authReducer,
  newClient: newClientReducer,
  searchClient: searchClientReducer,
  addAppointment: addAppointmentReducer,
  fetchAppointments: fetchAppointmentsReducer,
  selectedAppointment: selectedAppointmentReducer,
  moveAppointment: moveAppointmentReducer

})

export const middlewares = [reduxThunk]

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>

    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
    
  </Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
