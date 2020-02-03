//Core reacy
import React, { useState, useEffect } from "react"

//css
import classes from "./Form.module.css"

//components
import FormInput from "../../Components/FormInput/FormInput"

//redux hooks
import { useDispatch, useSelector } from "../../Utils/hooks"

//redux actions
import { addNewClient, resetForm } from "../../store/actions/New Client/NewClient-action"

const Form = props => {

    //config
    const dispatch = useDispatch()

    //states
    const [formInfo, setFormInfo] = useState({ name: "", phone: "", notes: "" })
    const [emptyInputs, setEmptyInputs] = useState([])

    //selectors
    const successfulAddition = useSelector(state => state.newClient.successfulAddition)
    const submissionFailure = useSelector(state => state.newClient.submissionFailure)

    //Effects
    useEffect(() => {

        if (successfulAddition)//if the form has been submitted successfully

        setFormInfo({ name: "", phone: "", notes: "" })//clear the form
        dispatch(resetForm())//dispatch to reset any errors

    }, [successfulAddition, dispatch])

    //functions
    const formSubmitHandler = () => {

        dispatch(resetForm())//dispatch to reset any errors

        setEmptyInputs([])

        let errorPresent = false;

        if (!formInfo.name.length) {

        errorPresent = true
        setEmptyInputs(emptyInputs => [...emptyInputs, "name"]) //if the name field is empty add it to the error fields array

    }

        if (formInfo.phone.length < 9 || formInfo.phone.includes(" ") || formInfo.phone.match(/^[0-9]+$/) === null) {
        
        errorPresent = true
        setEmptyInputs(emptyInputs => [...emptyInputs, "phone"])//if the phone field is empty, has spaces, or contains letters, set the errors

    }

        if (!errorPresent) dispatch(addNewClient(formInfo)) //if there are no errors, submit the form

    }

    const setBorder = inputName => emptyInputs.find(item => item === inputName) ? "red" : null

    const setError = (inputName, errorMessage) => emptyInputs.find(item => item === inputName) ? errorMessage : null


    return (

        <div test-handle="container" className={classes.container}>

            <FormInput prompt={"NAME :"} placeholder={"LOREN KNIGHT"} value={formInfo.name} handleChange={e => setFormInfo({ ...formInfo, name: e.target.value })}

                setBorder={{ borderColor: submissionFailure ? "red" : setBorder("name") }}

                setError={submissionFailure ? "That client name is in use" : setError("name", "Enter a name")}

                test-handle="name-input"

            />

            <FormInput prompt={"PHONE :"} placeholder={"07684485839"} value={formInfo.phone} handleChange={e => setFormInfo({ ...formInfo, phone: e.target.value })}

                setBorder={{ borderColor: setBorder("phone") }}

                setError={setError("phone", "Enter a valid phone number")}

                test-handle="phone-input"

            />

            <div className={classes.inputContainer} test-handle="notes-container">

                <span className={classes.promptText} test-handle="notes-prompt">NOTES :</span>
                <textarea className={classes.input} test-handle="notes-input" placeholder="Optional" style={{ height: "10vh", marginTop: "1vh", fontSize: "1.3rem" }} value={formInfo.notes} onChange={e => setFormInfo({ ...formInfo, notes: e.target.value })} />

            </div>

            <button className={classes.button} test-handle="button" onClick={() => formSubmitHandler()}>ADD</button>

        </div>

    )

}

export default Form