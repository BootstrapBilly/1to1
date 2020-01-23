//core react
import React, { useState, useEffect } from "react"

//redux
import { useSelector, useDispatch } from "../../Utils/hooks"

//actions
import { login } from "../../store/actions/Auth/Auth-action"

//Components
import Logo from "../../Components/Logo/Logo"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"

//css
import classes from "./Authentication.module.css"

const Authentication = props => {

    const loggedIn = useSelector(state => state.auth.loggedIn)
    const validationFailure = useSelector(state => state.auth.validationFailure)
    const lockout = useSelector(state => state.auth.lockout)
    const genericError = useSelector(state => state.auth.genericError)

    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    const [pin, setPin] = useState("")

    const dispatch = useDispatch()

    let errorMessage = null

    if (validationFailure) errorMessage = <p test-handle="errorMessage" className={classes.errorText}>The pin you have entered is incorrect</p>
    if (lockout) errorMessage = <p test-handle="errorMessage2" className={classes.errorText}>To many incorrect attempts<p>You have been locked out for 5 minutes</p></p>
    if (genericError) errorMessage = <p test-handle="errorMessage1" className={classes.errorText}>An error occured, we are working to fix it</p>

    useEffect(() => {

        if (loggedIn) props.history.push("/dashboard")

    }, [loggedIn, props.history])

    return (

        <React.Fragment>

            <div test-handle="container" className={classes.container}>

                <Logo test-handle="logo" />

                <Input test-handle="input" handleChange={e => setPin(e.target.value)} style={{ borderColor: validationFailure ? "red" : "none" }} />

                {errorMessage}

            </div>

            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}><Button test-handle="button" text={"LOG IN"} handleClick={() => { if (pin.length > 0) dispatch(login(pin)) }} /></div>

        </React.Fragment>
    )

}

export default Authentication