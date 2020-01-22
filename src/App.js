//core react
import React from 'react';

//external
import {useSelector} from "./Utils/hooks"

import { BrowserRouter, Switch, Route } from "react-router-dom"

//screens
import Authentication from "../src/Screens/Authentication/Authentication"
import Dashboard from "../src/Screens/Dashboard/Dashboard"

//HOCs
import ProtectedRoute from "./HOC/ProtectedRoute"

//reducers


function App() {

  const Authenticated = useSelector(state => state.auth.loggedIn)

  return (

    

      <BrowserRouter>

        <Switch>

          <Route path="/" exact component={Authentication} />
          <ProtectedRoute path="/dashboard" component={Dashboard} authenticated={Authenticated} />

        </Switch>

      </BrowserRouter>


  );

}

export default App;
