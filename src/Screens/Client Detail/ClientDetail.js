//react
import React, { useState, useEffect } from "react"

//css
import classes from "./ClientDetail.module.css"

//components
import Header from "../../Containers/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Appointment from "../../Components/Client/Client"

//external
import { useAlert } from 'react-alert'

//redux
import { useSelector, useDispatch } from "react-redux"

//redux actions
import { clearDisplayedClient, updateClient, clearUpdateStatuses } from "../../store/actions/Manage Clients/Manage-client-action"


const AddToGrid = props => {

    //config
    const dispatch = useDispatch()
    const alert = useAlert()//set up the alert hook

    //states
    const [editMode, setEditMode] = useState(false)

    //selectors
    const selectedClient = useSelector(state => state.manageClient.clientToDisplay)
    const clientUpdatedSuccessfully = useSelector(state => state.manageClient.clientUpdated)
    const clientNameTaken = useSelector(state => state.manageClient.nameTaken)


    //functions
    const handleUpdate = formValues => {

        if (!formValues.name.length) return alert.show(<div >Please enter a name</div>, { type: "error" })


        if (formValues.phone.length < 9 || formValues.phone.includes(" ") || formValues.phone.match(/^[0-9]+$/) === null) {

            return alert.show(<div >Please enter a valid phone number</div>, { type: "error" })
        }

        else {

            setEditMode(false)
            return dispatch(updateClient(formValues))

        }
    }

    useEffect(() => {

        if (clientNameTaken) {

            alert.show(<div>Client name in use</div>, { type: "error" })
            dispatch(clearUpdateStatuses())
        }

        if (clientUpdatedSuccessfully) {

            alert.show(<div>Client updated successfully</div>, { type: "success" })
            dispatch(clearUpdateStatuses())

        }

    }, [clientNameTaken, clientUpdatedSuccessfully])

    return (

        <React.Fragment>

            <Header text={"Search for a client"} backArrow
                handleBack={selectedClient ? () => dispatch(clearDisplayedClient()) : () => props.history.goBack()} />

            <div className={classes.container}>

                <Appointment
                    clientInfo={selectedClient}
                    editMode={editMode}
                    handleClickCross={() => {
                        dispatch(clearDisplayedClient())
                        setEditMode(false)
                    }}
                    handleClickEdit={() => setEditMode(!editMode)}
                    handleClickUpdate={(formValues) => handleUpdate(formValues)} />

            </div>

            <Footer addAppointment onCancel={() => props.history.goBack()} />

        </React.Fragment>

    )

}

export default AddToGrid