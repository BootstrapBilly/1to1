const validate_then_submit_form = (dispatch, clearPreviousErrors, setEmptyInputs, formInfo, addNewClient) => {

    dispatch(clearPreviousErrors())//dispatch to reset any validation errors
    setEmptyInputs([])//Clear all erroneous fields

    const name = formInfo.name//grab the user input for the name field
    const phone = formInfo.phone//grab the user input for the phone field

    let errorPresent = false;//a variable to catch any frontend vali errors

    if (!name.length) {//if the name input is empty

        errorPresent = true//Set the error to true
        setEmptyInputs(emptyInputs => [...emptyInputs, "name"]) //add it to the array of empty inputs (To highlight it)

    }

    if (phone.length < 9 || phone.includes(" ") || phone.match(/^[0-9]+$/) === null) { //If the phone is less than 9 chars, has a space, or contains anything other than 0-9

        errorPresent = true//set the error to true
        setEmptyInputs(emptyInputs => [...emptyInputs, "phone"])//add it to the array of empty inputs (To highlight it)

    }

    if (!errorPresent) dispatch(addNewClient(formInfo)) //if there are no errors, submit the form

}

export default validate_then_submit_form