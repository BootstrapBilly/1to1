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
import { addNewClient, clearPreviousErrors } from "../../store/actions/New Client/NewClient-action"

//functions
import validate_then_submit_form from "./functions/validate_then_submit_form"

const Form = props => {

    //_config
    const dispatch = useDispatch()//Set up the dispatch redux hook
    const alert = useAlert()//set up the alert hook

    //*states
    const [formInfo, setFormInfo] = useState({ name: "", phone: "", notes: "" })//Set the intial state of the form inputs
    const [emptyInputs, setEmptyInputs] = useState([])//Set the intial erroneous input fields 

    //-selectors
    const client_was_added = useSelector(state => state.newClient.successfulAddition)//Listens for any new additions (Initially null)
    const submissionFailure = useSelector(state => state.newClient.submissionFailure)//Listens for any backend vali failures (Initially null)

    //!functions

    const handleSubmit = () => validate_then_submit_form(dispatch, clearPreviousErrors, setEmptyInputs, formInfo, addNewClient)

    const setBorder = inputName => emptyInputs.find(item => item === inputName) ? "red" : null//if the input is in the array of errors, set the border to red

    const setErrorMsg = (inputName, errorMessage) => emptyInputs.find(item => item === inputName) ? errorMessage : null//and display the error message it has assigned


    //? Effects
    useEffect(() => {

        if (client_was_added) {//if the form has been submitted successfully

            setFormInfo({ name: "", phone: "", notes: "" })//clear the form
            dispatch(clearPreviousErrors())//dispatch to reset any errors

            alert.show(<div test-handle="Client Added successfully">Client added successfully!</div>, { type: "success" })//display an alert to provide user feedback

        }
        // eslint-disable-next-line
    }, [client_was_added, dispatch])


    return (

        <div test-handle="container" className={classes.container}>

            <FormInput

                inputTitle={"NAME :"}
                placeholder={"LOREN KNIGHT"}
                value={formInfo.name}
                handleChange={e => setFormInfo({ ...formInfo, name: e.target.value })}
                overWriteStyle={{ borderColor: submissionFailure ? "red" : setBorder("name"), background: "white" }}
                errorMessage={submissionFailure ? "That client name is in use" : setErrorMsg("name", "Enter a name")}
                test-handle="name-input"

            />

            <FormInput

                inputTitle={"PHONE :"}
                placeholder={"07684485839"}
                value={formInfo.phone}
                handleChange={e => setFormInfo({ ...formInfo, phone: e.target.value })}
                overWriteStyle={{ borderColor: setBorder("phone"), background: "white" }}
                errorMessage={setErrorMsg("phone", "Enter a valid phone number")}
                test-handle="phone-input"

            />

            <div className={classes.inputContainer} test-handle="notes-container" style={{ background: "white" }}>

                <span className={classes.inputTitle} test-handle="notes-prompt">NOTES :</span>

                <textarea className={classes.input} test-handle="notes-input"

                    placeholder="Optional"
                    style={{ height: "10vh", marginTop: "1vh", fontSize: "1.3rem" }}
                    value={formInfo.notes}
                    onChange={e => setFormInfo({ ...formInfo, notes: e.target.value })}

                />

            </div>

            <button className={classes.button} test-handle="button" onClick={() => handleSubmit()}>ADD</button>

        </div>

    )

}

export default Form