//core react
import React, {useState} from "react"

//redux
import {useSelector, useDispatch} from "../../Utils/hooks"

//actions
import {login} from "../../store/actions/Auth/Auth-action"

//Components
import Logo from "../../Components/Logo/Logo"
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button"

//css
import classes from "./Authentication.module.css"

const Authentication = props => {

    // const loggedIn = useSelector(state => state.auth.loggedIn)
    const validationFailure = useSelector(state => state.auth.validationFailure)

    console.log(validationFailure)

    const [pin, setPin] = useState("")

    const dispatch = useDispatch()

    const sendVerifyRequest = () => {

        dispatch(login(pin))
        setPin("")

    }

    return (

        <div test-handle="container" className={classes.container}>

            <Logo test-handle="logo" />

            <Input test-handle="input" handleChange={e => setPin(e.target.value)}/>

            <Button test-handle="button" text={"LOG IN"} handleClick={()=> sendVerifyRequest()}/>

            <p test-handle="errorMessage">{validationFailure ? "Sdsfhjksdhkdsjhfkjdskhjfnss" : null}</p>

        </div>

    )
}

export default Authentication