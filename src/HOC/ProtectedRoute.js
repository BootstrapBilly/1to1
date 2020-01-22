//core react
import React from "react"

//External
import { Route, Redirect } from "react-router-dom"

//Redux hooks

//components

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const Authenticated = rest.authenticated

    if (Authenticated) return (<Route {...rest} test-handle="route" render={props => <Component {...props} test-handle="correct" />} />)

    else return (<Route {...rest} test-handle="redirect" render={props => <Redirect to={
        {
            pathname: "/",
            state: {
                from: props.location
            }
        }
    } />} />)



}

export default ProtectedRoute
