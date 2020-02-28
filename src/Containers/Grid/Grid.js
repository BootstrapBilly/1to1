/*
    This component has many moving parts and is complex
    
    1 - once it loads, an action is dispatched which sends the date of the grid to the api which returns the appointment data for that day.

        > The date is passed in by the parent component, or set to today if the grid is rendered on the dashboard

    2 - The selector grabs the appointment data from the store and passes it to the populate cellData function 

        > The populate cell data function takes 4 arrays, (1 for each column) and populates it with the appointment data received from the api

    3 - During the mapping of the rows in each column, the styleCell is called on every map, which feeds off the data which was set by the populateCellData function

        It takes the following :

        > Column array (populated with data by the populate cell data function)
        > Column name
        > Current mapping of the array of cells (e.g. 7)
        > Props of this component
        > classes of this component

        With this information it searches through the associated column data array, e.g. col1 = column1, 
        And searches for certain conditions, which if it finds, applies a certain css class
        E.g "overFlow" will apply an overflow styling class

*/

//react
import React, { useEffect } from "react"

//css
import classes from "./grid.module.css"

//external
import PropTypes from "prop-types"
import { useSwipeable } from 'react-swipeable'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux actions
import { fetchAppointments } from "../../store/actions/Fetch Appointments/fetch-appointment-action"
import { dispatch_set_selected_appointment } from "../../store/actions/SelectedAppointment/SelectedAppointment-action"
import { moveAppointment } from "../../store/actions/Move Appointment/Move-Appointment-action"
import { reset_moved_appointment_indicator } from "../../store/actions/Move Appointment/Move-Appointment-action"

//functions
import populate_column_data from "./functions/populate_column_data"
import apply_selected_css from "./functions/apply_selected_css"
import set_selected_appointment from "./functions/set_select_appointment"
import get_next_four_cells from "./functions/get_next_four_cells"

//components
import Cell from "../Cell/Cell"//styles the cell based on the data

const Grid = props => {

    //_Configuration
    const dispatch = useDispatch() //call the dispatch hook to dispatch redux actions
    const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]//set the amount of rows on the grid
    const column1 = [], column2 = [], column3 = [], column4 = [] //define the columns to be populated with appointments

    const handlers = useSwipeable({//makes the grid swipable 

        onSwipedLeft: props.onSwipedLeft,
        onSwipedRight: props.onSwipedRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true

    });

    //-Selectors
    const appointments = useSelector(state => state.fetchAppointments.appointments)//get the appointment data fetched from the api
    const lastDeletedAppointment = useSelector(state => state.selectedAppointment.deletedId)//get the appointment data fetched from the api
    const currentSelectedAppointment = useSelector(state => state.selectedAppointment.selectedAppointment)
    const appointmentMoved = useSelector(state => state.moveAppointment.appointment_moved)

    //!functions

    populate_column_data(appointments, column1, column2, column3, column4)//populate the 4 column arrays with the appointment data fetched from the api

    //run the apply selected class helper function
    const handle_class_assignment = (column, row) => apply_selected_css(column, row, classes, currentSelectedAppointment, props.rescheduleMode)

    //run the set selected appointment helper function
    const handle_select_appointment = (new_appointment) => set_selected_appointment(currentSelectedAppointment, new_appointment, dispatch, dispatch_set_selected_appointment, props.rescheduleMode)

    //Generate the next four cells after the appointment (used to check space available for appointment reassignment)
    const handle_next_four_cells = (colNumber, rowNumber) => get_next_four_cells(colNumber, rowNumber)

    const handle_move_appointment = cell => { 
        
        dispatch(moveAppointment(cell, currentSelectedAppointment.id))
    
    }

    //_ Effects
    useEffect(() => {

        dispatch(fetchAppointments(props.date))//fetch the appointment data for that date

        if (lastDeletedAppointment) dispatch(dispatch_set_selected_appointment(null))

        if(appointmentMoved){

            dispatch(dispatch_set_selected_appointment(null))
            dispatch(reset_moved_appointment_indicator())

        }
        // eslint-disable-next-line
    }, [props.date, lastDeletedAppointment, appointmentMoved])

    return (

        <section {...handlers} className={classes.section} style={{ height: props.fullSize ? "90vh" : null }}>

            <div test-handle="container" className={classes.container}>

                <div test-handle="hourCol" className={classes.hourCol}>

                    {
                        //Map all the hour labels on the left side of the grid
                        ["9am", "10am", "11am", "12pm", "13pm", "14pm", "15pm", "16pm", "17pm"].map(item => {

                            const sliced = item.slice(0, -2)

                            return <div test-handle={item} className={classes.hourColSegment} key={item}>{sliced}</div>
                        })

                    }

                </div>

                <div test-handle="minRow" className={classes.minRow}>

                    {
                        ["15mins", "30mins", "45mins"].map(item => {

                            const sliced = item.slice(0, -4)

                            return <div test-handle={item} className={classes.minRowSegment} key={item}>{sliced}</div>
                        })

                    }

                </div>

                <div test-handle="inner-container" className={classes.innerContainer}>

                    {
                        [["col1", column1], ["col2", column2], ["col3", column3], ["col4", column4]]//map the array of 4 columns, rendering a column for each

                            .map(columnArray => {

                                //the container for the column 
                                return <div test-handle={columnArray[0]} className={classes.column} key={columnArray[0]}>

                                    {

                                        rows.map(row => {//inside the column, map the array of rows (defined at the top in config)

                                            return <Cell //for every column, render a cell component

                                                key={row} //set the key as the row number
                                                column={columnArray[1]} //pass in the column data (set by the populateCellData function)
                                                colNumber={columnArray[0]} //pass in the column number
                                                rowNumber={row} //pass in the row number
                                                props={props} //pass in the props of this component
                                                classes={classes} //and the classes of this compoment
                                                appointments={appointments} //pass in the full appointment data (from redux selector)

                                                rescheduleMode={props.rescheduleMode}//pass on whether its reschedule mode or not(set by the icon on the footer in calendardate)
                                                nextFourCells={handle_next_four_cells(columnArray[0], row)}
                                                // eslint-disable-next-line
                                                appointments={appointments}//pass in all appointments

                                                onClickEmpty={props.onClickEmpty} //handle when an empty cell is clicked               
                                                onClickActive={(new_appointment) => handle_select_appointment(new_appointment)} //handle when an active cell is clicked
                                                onClickAvailable={(cell) => handle_move_appointment(cell)} //handle when an active cell is clicked

                                                //if an appointment is selected, assign the selected css class to it, pass in the current column and row
                                                overWriteClass={currentSelectedAppointment ? handle_class_assignment(columnArray[1], row) : null}

                                            />

                                        })

                                    }

                                </div>

                            }

                            )

                    }

                </div>

            </div>

        </section>
    )

}

Grid.propTypes = {

    onClickActive: PropTypes.func,
    onClickInactive: PropTypes.func,
    onSwipedLeft: PropTypes.func,
    onSwipedRight: PropTypes.func,
    date: PropTypes.string,
    fullSize: PropTypes.bool,

}

export default Grid