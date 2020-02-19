//Core react
import React, { useState, useEffect } from "react"

//external
import { useAlert } from 'react-alert'

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
    const dispatch = useDispatch()//Set up the dispatch redux hook
    const alert = useAlert()//set up the alert hook

    //states
    const [formInfo, setFormInfo] = useState({ name: "", phone: "", notes: "" })//Set the intial state of the form inputs
    const [emptyInputs, setEmptyInputs] = useState([])//Set the intial erroneous input fields 

    //selectors
    const successfulAddition = useSelector(state => state.newClient.successfulAddition)//Listens for any new additions (Initially null)
    const submissionFailure = useSelector(state => state.newClient.submissionFailure)//Listens for any backend vali failures (Initially null)

    //*functions

    const formSubmitHandler = () => {

        dispatch(resetForm())//dispatch to reset any vali errors
        setEmptyInputs([])//Clear all erroneous fields

        let errorPresent = false;//a variable to catch any frontend vali errors

        if (!formInfo.name.length) {//if the name input is empty

            errorPresent = true//Set the error to true
            setEmptyInputs(emptyInputs => [...emptyInputs, "name"]) //add it to the array of empty inputs (To highlight it)

        }

        //If the phone is less than 9 chars, has a space, or contains anything other than 0-9
        if (formInfo.phone.length < 9 || formInfo.phone.includes(" ") || formInfo.phone.match(/^[0-9]+$/) === null) {

            errorPresent = true//set the error to true
            setEmptyInputs(emptyInputs => [...emptyInputs, "phone"])//add it to the array of empty inputs (To highlight it)

        }

        if (!errorPresent) dispatch(addNewClient(formInfo)) //if there are no errors, submit the form

    }

    //if the given input name is inside the array of errors, set the border to red, otherwise do nothing
    const setBorder = inputName => emptyInputs.find(item => item === inputName) ? "red" : null
    //If the given inputname is inside the array of errors, set the error message to the given error message, otherwise do nothing
    const setErrorMsg = (inputName, errorMessage) => emptyInputs.find(item => item === inputName) ? errorMessage : null

    //? Effects
    useEffect(() => {

        if (successfulAddition){//if the form has been submitted successfully

        setFormInfo({ name: "", phone: "", notes: "" })//clear the form
        dispatch(resetForm())//dispatch to reset any errors
        alert.show(<div test-handle="Client Added successfully">Client added successfully!</div>, {type:"success"})}
// eslint-disable-next-line
    }, [successfulAddition, dispatch])


    return (

        <div test-handle="container" className={classes.container}>

            <FormInput inputTitle={"NAME :"} placeholder={"LOREN KNIGHT"} value={formInfo.name} handleChange={e => setFormInfo({ ...formInfo, name: e.target.value })}

                overWriteStyle={{borderColor: submissionFailure ? "red" : setBorder("name"), background: "white" }}

                errorMessage={submissionFailure ? "That client name is in use" : setErrorMsg("name", "Enter a name")}

                test-handle="name-input"

            />

            <FormInput inputTitle={"PHONE :"} placeholder={"07684485839"} value={formInfo.phone} handleChange={e => setFormInfo({ ...formInfo, phone: e.target.value })}

                overWriteStyle={{ borderColor: setBorder("phone"), background: "white" }}

                errorMessage={setErrorMsg("phone", "Enter a valid phone number")}

                test-handle="phone-input"

            />

            <div className={classes.inputContainer} test-handle="notes-container" style={{ background: "white" }}>

                <span className={classes.inputTitle} test-handle="notes-prompt">NOTES :</span>
                <textarea className={classes.input} test-handle="notes-input" placeholder="Optional" style={{ height: "10vh", marginTop: "1vh", fontSize: "1.3rem" }} value={formInfo.notes} onChange={e => setFormInfo({ ...formInfo, notes: e.target.value })} />

            </div>

            <button className={classes.button} test-handle="button" onClick={() => formSubmitHandler()}>ADD</button>

        </div>

    )

}

export default Form