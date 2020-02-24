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
import React, { useEffect, useState } from "react"

//css
import classes from "./grid.module.css"

//external
import PropTypes from "prop-types"
import { useSwipeable } from 'react-swipeable'

//redux hooks
import { useDispatch, useSelector } from "react-redux"

//redux actions
import { fetchAppointments } from "../../store/actions/Fetch Appointments/fetch-appointment-action"
import { currentlySelectedAppointment } from "../../store/actions/SelectedAppointment/SelectedAppointment-action"

//functions
import populateCellData from "./populateCellData"
import apply_selected_css from "./functions/apply_selected_css"

//!Move me
import StyleCell from "./styleCell"//styles the cell based on the data

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

    //*States
    const [selectedAppointmentId, setSelectedAppointmentId] = useState(null)

    //!functions
    populateCellData(appointments, column1, column2, column3, column4)//populate the 4 column arrays with the appointment data fetched from the api

    const handle_class_assignment = (column, row) => apply_selected_css(column, row, selectedAppointmentId, classes)

    //_ Effects
    useEffect(() => {

        dispatch(fetchAppointments(props.date))//fetch the appointment data for that date

        if (lastDeletedAppointment) setSelectedAppointmentId(null)
        // eslint-disable-next-line
    }, [props.date, lastDeletedAppointment])



    const handleSelectAppointment = appointment => {

        if (selectedAppointmentId === appointment.id && currentSelectedAppointment) {

            setSelectedAppointmentId(null)
            return dispatch(currentlySelectedAppointment(null))

        }

        setSelectedAppointmentId(appointment.id)
        return dispatch(currentlySelectedAppointment(appointment))

    }

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
                        //Map all minute labels on the top of grid
                        ["15mins", "30mins", "45mins"].map(item => {

                            const sliced = item.slice(0, -4)

                            return <div test-handle={item} className={classes.minRowSegment} key={item}>{sliced}</div>
                        })

                    }

                </div>

                //? Inner container ================================================================================================

                <div test-handle="inner-container" className={classes.innerContainer}>

                    {
                        [["col1", column1], ["col2", column2], ["col3", column3], ["col4", column4]]

                            .map(columnArray => {

                                return <div test-handle={columnArray[0]} className={classes.column}>

                                    {

                                        rows.map(row => {


                                            return <StyleCell rescheduleMode={props.rescheduleMode} column={columnArray[1]} colNumber={columnArray[0]} rowNumber={row} props={props} classes={classes} onClickEmpty={props.onClickEmpty} key={row} onClickActive={(appointment) => handleSelectAppointment(appointment)}
                                                
                                            overWriteClass={selectedAppointmentId ? handle_class_assignment(columnArray[1], row) : null} appointments={appointments} />

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