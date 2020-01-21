//core react
import React from "react"

//External
import { Route, Redirect } from "react-router-dom"

//Redux hooks
import { useSelector } from "../Utils/hooks"

//components

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const Authenticated = useSelector(state => state.auth.loggedIn)

    return (

        <Route {...rest} test-handle="route"
        
        render={props => {

            if (Authenticated) { return <Component {...props} /> }

            else {

                return <Redirect to={
                    {
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }
                } />

            }

        }} />)

    }

    export default ProtectedRoute
