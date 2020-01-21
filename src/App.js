//core react
import React from 'react';

//external
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"

//screens
import Authentication from "../src/Screens/Authentication/Authentication"
import Dashboard from "../src/Screens/Dashboard/Dashboard"

//HOCs
import ProtectedRoute from "./HOC/ProtectedRoute"

//reducers
import authReducer from "./store/reducers/Auth/Auth-reducer"


export const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  auth: authReducer,

})

export const middlewares = [reduxThunk]

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

function App() {


  return (

    <Provider store={store}>

      <BrowserRouter>

        <Switch>

          <Route path="/" exact component={Authentication} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />

        </Switch>

      </BrowserRouter>

    </Provider>

  );

}

export default App;
