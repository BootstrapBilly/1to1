//core react
import React, {useEffect} from 'react';

//external
import { useSelector } from "./Utils/hooks"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//redux hooks
import { useDispatch } from "react-redux"

//redux action creators
import { try_auto_login } from "./store/actions/Auth/Auth-action"

//screens
import Authentication from "../src/Screens/Authentication/Authentication"
import Dashboard from "../src/Screens/Dashboard/Dashboard"
import CalendarDate from "./Screens/CalendarDate/CalendarDate"
import NewClient from "./Screens/NewClient/NewClient"
import AddAppointment from "./Screens/Add Appointment/Add-appointment"
import SearchClient from "./Screens/Search Clients/SearchClient"

//HOCs
import ProtectedRoute from "./HOC/ProtectedRoute"

//reducers
function App() {

  const dispatch = useDispatch()

  dispatch(try_auto_login())

  const Authenticated = useSelector(state => state.auth.loggedIn)

  useEffect(()=> {

    window.scrollTo(0, 1)

  })

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={Authentication} />
        <ProtectedRoute path="/dashboard" component={Dashboard} authenticated={Authenticated} />
        <ProtectedRoute path="/calendar-date/:date" component={CalendarDate} authenticated={Authenticated} />
        <ProtectedRoute path="/new-client" component={NewClient} authenticated={Authenticated} />
        <ProtectedRoute path="/add-appointment" component={AddAppointment} authenticated={Authenticated} />
        <ProtectedRoute path="/find-client" component={SearchClient} authenticated={Authenticated} />

      </Switch>

    </BrowserRouter>

  );

}

export default App;
