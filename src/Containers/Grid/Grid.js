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

        With this information it searches through the associated column data array, e.g. col1 = activeC1, 
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

//Utility functions
import populateCellData from "./populateCellData"

//!Move me
import StyleCell from "./styleCell"//styles the cell based on the data

const Grid = props => {

    //!Configuration
    const dispatch = useDispatch() //call the dispatch hook to dispatch redux actions
    const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]//set the amount of rows on the grid
    const activeC1 = [], activeC2 = [], activeC3 = [], activeC4 = [] //define the columns to be populated with appointments

    const handlers = useSwipeable({//makes the grid swipable 
        onSwipedLeft: props.onSwipedLeft,
        onSwipedRight: props.onSwipedRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    //*Selectors
    const appointments = useSelector(state => state.fetchAppointments.appointments)//get the appointment data fetched from the api
    const lastDeletedAppointment = useSelector(state => state.selectedAppointment.deletedId)//get the appointment data fetched from the api
    const currentSelectedAppointment = useSelector(state => state.selectedAppointment.selectedAppointment)

    //-States
    const [selectedAppointmentId, setSelectedAppointmentId] = useState(null)

    populateCellData(appointments, activeC1, activeC2, activeC3, activeC4)//populate the 4 column arrays with the appointment data fetched from the api

    //_ Effects
    useEffect(() => {

        dispatch(fetchAppointments(props.date))//fetch the appointment data for that date

        if (lastDeletedAppointment) setSelectedAppointmentId(null)
        // eslint-disable-next-line
    }, [props.date, lastDeletedAppointment])

    const checkForSelectedClass = (col, item) => {

        let classname = null

        col.forEach(innerItem => {

            if(!currentSelectedAppointment) return null

            if (innerItem[0] === item) {

                if (selectedAppointmentId === innerItem[4]) {

                    classname = classes.selected
                }
            }
        })

        return classname

    }

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

                        ["9am", "10am", "11am", "12pm", "13pm", "14pm", "15pm", "16pm", "17pm"].map(item => {

                            const sliced = item.slice(0, -2) //E.g. 12, 13, 14

                            return <div test-handle={item} className={classes.hourColSegment} key={item}>{sliced}</div>
                        })

                    }

                </div>

                <div test-handle="minRow" className={classes.minRow}>

                    {

                        ["15mins", "30mins", "45mins"].map(item => {

                            const sliced = item.slice(0, -4)//e.g 15,30,45

                            return <div test-handle={item} className={classes.minRowSegment} key={item}>{sliced}</div>
                        })

                    }

                </div>

                <div test-handle="inner-container" className={classes.innerContainer}>

                    <div test-handle="col1" className={classes.column}>

                        {


                            rows.map(item => {

                                // if(activeC1[(item-1)]) console.log(activeC1[(item-1)][4] + " " + item)

                                /* It feeds from the rows array set in the config, at the top of the file
                                
                                It calls the stylecell helper function to style the cell based on its properties, then returns the cells and maps 
                                the whole column, styling each cell as it goes

                                styleCell returns a html element, so it maps 9 styled cells
                                */
                                const next4 = {
                                    one: `col-1_row${item}`,
                                    two: `col-2_row${item}`,
                                    three: `col-3_row${item}`,
                                    four: `col-4_row${item}`
                            }

                                return <StyleCell rescheduleMode={props.rescheduleMode} column={activeC1} colNumber={"col1"} rowNumber={item} props={props} classes={classes} onClickEmpty={props.onClickEmpty} key={item} onClickActive={(appointment) => handleSelectAppointment(appointment)}
                                    overWriteClass={selectedAppointmentId ? checkForSelectedClass(activeC1, item) : null} next4={next4} appointments={appointments} />

                            })

                        }

                    </div>


                    <div test-handle="col2" className={classes.column}>

                        {

                            rows.map(item => {

                                //same as above but for col 2
                                // const cell = styleCell(activeC2, "col2", item, props, classes)
                                const next4 = {
                                    1: `col-2_row${item}`,
                                    2: `col-3_row${item}`,
                                    3: `col-4_row${item}`,
                                    4: `col-1_row${parseInt(item)+1}`
                            }

                                return <StyleCell rescheduleMode={props.rescheduleMode} column={activeC2} colNumber={"col2"} rowNumber={item} props={props} classes={classes} onClickEmpty={props.onClickEmpty} key={item} onClickActive={(appointment) => handleSelectAppointment(appointment)}
                                    overWriteClass={selectedAppointmentId ? checkForSelectedClass(activeC2, item) : null} next4={next4}
                                />

                            })

                        }

                    </div>

                    <div test-handle="col3" className={classes.column}>

                        {

                            rows.map(item => {

                                //same as above but for col 3
                                // const cell = styleCell(activeC3, "col3", item, props, classes)

                                const next4 = {

                                    1: `col-3_row${item}`,
                                    2: `col-4_row${item}`,
                                    3: `col-1_row${parseInt(item)+1}`,
                                    4: `col-2_row${parseInt(item)+1}`

                            }

                                return <StyleCell rescheduleMode={props.rescheduleMode} column={activeC3} colNumber={"col3"} rowNumber={item} props={props} classes={classes} onClickEmpty={props.onClickEmpty} key={item} onClickActive={(appointment) => handleSelectAppointment(appointment)}
                                    overWriteClass={selectedAppointmentId ? checkForSelectedClass(activeC3, item) : null} next4={next4}  appointments={appointments}/>

                            })

                        }

                    </div>

                    <div test-handle="col4" className={classes.column}>

                        {

                            rows.map(item => {

                                //same as above but for col 4
                                // const cell = styleCell(activeC4, "col4", item, props, classes)

                                const next4 = {
                                    1: `col-4_row${item}`,
                                    2: `col-1_row${parseInt(item)+1}`,
                                    3: `col-2_row${parseInt(item)+1}`,
                                    4: `col-3_row${parseInt(item)+1}`
                            }

                                return <StyleCell rescheduleMode={props.rescheduleMode} column={activeC4} colNumber={"col4"} rowNumber={item} props={props} classes={classes} onClickEmpty={props.onClickEmpty} key={item} onClickActive={(appointment) => handleSelectAppointment(appointment)}
                                    overWriteClass={selectedAppointmentId ? checkForSelectedClass(activeC4, item) : null} next4={next4} />

                            })

                        }

                    </div>

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