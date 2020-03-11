//react
import React, {useState} from "react"

//prop types
import PropTypes from "prop-types"

//css
import classes from "./Client.module.css"

const Appointment = props => {
    
    const [formValues, setFormValues] = useState({

        name: props.clientInfo.name,
        phone:props.clientInfo.phoneNumber,
        notes:props.clientInfo.notes,
        originalName: props.clientInfo.name
    })

    return(

    <div className={classes.card} test-handle="container">

        <div className={classes.topRow} test-handle="topRow">

            <input
                className={[classes.input, classes.nameInput, props.editMode ? null : classes.disabled].join(" ")}
                defaultValue={props.clientInfo.name}
                disabled={props.editMode ? false : true}
                onChange={(e)=> setFormValues({...formValues, name:e.target.value })}
            />

            <p className={[classes.button, classes.cross].join(" ")} test-handle="cross" onClick={props.handleClickCross}>x</p>

        </div>


        <div className={classes.lowerMidRow} test-handle="lowerMidRow">

            <input
                className={[classes.input, classes.phoneInput, props.editMode ? null : classes.disabled].join(" ")}
                defaultValue={props.clientInfo.phoneNumber}
                disabled={props.editMode ? false : true}
                onChange={(e)=> setFormValues({...formValues, phone:e.target.value })}
            />

        </div>

        <div className={classes.notesRow} test-handle="notesRow">

            {props.editMode ?

                <textarea
                    className={[classes.input, classes.notesInput, props.editMode ? null : classes.disabled].join(" ")}
                    defaultValue={props.clientInfo.notes}
                    onChange={(e)=> setFormValues({...formValues, notes:e.target.value })}
                />

                : <span className={classes.notes} test-handle="notes">{props.clientInfo.notes}</span>}


        </div>

        {props.editMode ?

            <div className={classes.bottomRow} test-handle="bottomRow">

                <p className={[classes.button, classes.bottomButton, classes.delete].join(" ")} test-handle="cancel" onClick={props.handleClickEdit}>CANCEL</p>
                <p className={[classes.button, classes.bottomButton, classes.update].join(" ")} test-handle="update" onClick={props.handleClickUpdate.bind(this, formValues)}>UPDATE</p>

            </div>

            :

            <div className={classes.bottomRow} test-handle="bottomRow">

                <p className={[classes.button, classes.bottomButton, classes.delete].join(" ")} test-handle="delete" onClick={props.handleClickSeen}>DELETE</p>
                <p className={[classes.button, classes.bottomButton, classes.edit].join(" ")} test-handle="edit" onClick={props.handleClickEdit}>EDIT</p>

            </div>

        }

    </div>

)
}

Appointment.propTypes = {

    name: PropTypes.string,
    onClickCross: PropTypes.func,
    onClickEdit: PropTypes.func,
    onClickSeen: PropTypes.func,
    time: PropTypes.string,
    date: PropTypes.string,
    phone: PropTypes.string,
    notes: PropTypes.string,

}

export default Appointment