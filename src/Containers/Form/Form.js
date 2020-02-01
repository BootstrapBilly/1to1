//Core reacy
import React, { useState, useEffect } from "react"

//css
import classes from "./Form.module.css"

//components
import FormInput from "./FormInput/FormInput"

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

    //Effects
    useEffect(() => {

        if (successfulAddition)//if the form has been submitted successfully

            setFormInfo({ name: "", phone: "", notes: "" })//clear the form
        dispatch(resetForm())//dispatch to reset any errors


    }, [successfulAddition, dispatch])

    //methods
    const formSubmitHandler = () => {

        setEmptyInputs([])//clear any errors on submit

        if (!formInfo.name.length) setEmptyInputs(emptyInputs => [...emptyInputs, "name"]) //if the name field is empty add it to the error fields array

        if (!formInfo.phone.length) setEmptyInputs(emptyInputs => [...emptyInputs, "phone"])//if the phone field is empty add it to the error fields array

        if (emptyInputs === []) dispatch(addNewClient(formInfo)) //if there are no errors, submit the form

    }

    return (

        <div test-handle="container" className={classes.container}>

        <FormInput prompt={"NAME :"} placeholder={"LOREN KNIGHT"} value={formInfo.name} handleChange={e => setFormInfo({ ...formInfo, name: e.target.value})}

        setBorder={{borderColor: emptyInputs.find(item => item === "name") ? "red" : null}}

        setError={emptyInputs.find(item => item === "name") ? "Please enter a name" : null}

        />

        <FormInput prompt={"PHONE NUMBER :"} placeholder={"07684485839"} value={formInfo.phone} handleChange={e => setFormInfo({ ...formInfo, phone: e.target.value})}

        setBorder={{borderColor: emptyInputs.find(item => item === "phone") ? "red" : null}}

        setError={emptyInputs.find(item => item === "phone") ? "Please enter a phone number" : null}

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