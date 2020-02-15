//core react
import React, { useState, useEffect } from "react"

//redux
import { useSelector, useDispatch } from "../../Utils/hooks"

//actions
import { login } from "../../store/actions/Auth/Auth-action"

//Components
import Logo from "../../Components/Logo/Logo"
import AuthInput from "../../Components/AuthInput/AuthInput"
import Button from "../../Components/Button/Button"

//css
import classes from "./Authentication.module.css"

const Authentication = props => {

    //_config
    const dispatch = useDispatch()//initialise the redux action dispatcher
    let errorMessage = null//declaring the error message which pops up on validation errors

    //*states
    const [pin, setPin] = useState("")//pin entered to be verified by the backend, set by the value of the input

    //-Selectors
    const loggedIn = useSelector(state => state.auth.loggedIn)//whether the user is logged in
    const validationFailure = useSelector(state => state.auth.validationFailure)//catches incorrect passwords
    const lockout = useSelector(state => state.auth.lockout)//catches brute force attempts
    const genericError = useSelector(state => state.auth.genericError)//catches database errors

    //= conditional content
    //error message rendering
    if (validationFailure) errorMessage = <p test-handle="errorMessage" className={classes.errorText}>The pin you have entered is incorrect</p>
    if (lockout) errorMessage = <p test-handle="errorMessage2" className={classes.errorText}>To many incorrect attempts<p>You have been locked out for 5 minutes</p></p>
    if (genericError) errorMessage = <p test-handle="errorMessage1" className={classes.errorText}>An error occured, we are working to fix it</p>

    //!effects
    useEffect(() => { if (loggedIn) props.history.push("/dashboard") }, [loggedIn, props.history])//if the user is logged in, route them through to the dashboard

    return (

        <React.Fragment>

            <div test-handle="container" className={classes.container}>

                <Logo test-handle="logo" />

                <AuthInput test-handle="input" handleChange={e => setPin(e.target.value)} overWriteStyle={{ borderColor: validationFailure ? "red" : "none" }} />

                {<span test-handle="errorMsg">{errorMessage}</span>}

            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Button test-handle="button" text={"LOG IN"} handleClick={() => { if (pin.length > 0) dispatch(login(pin)) }} /></div>

        </React.Fragment>
    )

}

export default Authentication