//core react
import React, { useState, useEffect } from "react"

//redux
import { useSelector, useDispatch } from "../../Utils/hooks"

//external

//actions
import { login } from "../../store/actions/Auth/Auth-action"

//Components
import Logo from "../../Components/Logo/Logo"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"

//screens

//css
import classes from "./Authentication.module.css"

const Authentication = props => {

    const loggedIn = useSelector(state => state.auth.loggedIn)
    const validationFailure = useSelector(state => state.auth.validationFailure)
    const lockout = useSelector(state => state.auth.lockout)
    const genericError = useSelector(state => state.auth.genericError)
    
    const [pin, setPin] = useState("")

    const dispatch = useDispatch()

    let errorMessage = null

    if(validationFailure && !lockout) errorMessage = <p test-handle="errorMessage" className={classes.errorText}>The pin you have entered is incorrect</p>
    if(lockout) errorMessage = <p test-handle="errorMessage" className={classes.errorText}>To many incorrect attempts<p>You have been locked out for 5 minutes</p></p>
    if(genericError) errorMessage = <p test-handle="errorMessage" className={classes.errorText}>An error occured, we are working to fix it</p>

    useEffect(()=> { 

    if(loggedIn) props.history.push("/dashboard") 
    
}, [loggedIn, props.history])

    return (
            
            <div test-handle="container" className={classes.container}>

                <Logo test-handle="logo" />

                <Input test-handle="input" handleChange={e => setPin(e.target.value)} style={{ borderColor: validationFailure ? "red" : "white" }} />

                <Button test-handle="button" text={"LOG IN"} handleClick={() => {if (pin.length > 0) dispatch(login(pin))} } />

                {errorMessage}

            </div>
    )

}

export default Authentication