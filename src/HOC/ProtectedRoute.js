//core react
import React from "react"

//External
import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const Authenticated = rest.authenticated //get the authenticated status from props

    //if the user is authenticated, direct them to their desired route
    if (Authenticated) return (<Route {...rest} test-handle="route" render={props => <Component {...props} test-handle="correct" />} />)

    //otherwise redirect them to home
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
