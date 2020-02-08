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
import React, { useEffect } from "react"
import classes from "./grid.module.css"

import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"

import { fetchAppointments } from "../../store/actions/Fetch Appointments/fetch-appointment-action"

import populateCellData from "./populateCellData"
import styleCell from "./styleCell"//styles the cell based on the data

//external
import { useSwipeable } from 'react-swipeable'

const Grid = props => {

    //!Configuration
    const dispatch = useDispatch() //call the dispatch hook to dispatch redux actions
    const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]//set the amount of rows on the grid
    const activeC1 = [], activeC2 = [], activeC3 = [], activeC4 = [] //define the columns to be populated with appointments

    //*Selectors
    const appointments = useSelector(state => state.fetchAppointments.appointments)//get the appointment data fetched from the api

    populateCellData(appointments, activeC1, activeC2, activeC3, activeC4)//populate the 4 column arrays with the appointment data fetched from the api

    //_ Effects
    useEffect(() => {

        dispatch(fetchAppointments(props.date))//fetch the appointment data for that date
  // eslint-disable-next-line
    }, [props.date])

    const handlers = useSwipeable({
        onSwipedLeft: props.onSwipedLeft,
        onSwipedRight: props.onSwipedRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        

        <section {...handlers} className={classes.section} style={{ height: props.fullSize ? "90vh" : null }}>

            <div test-handle="container" className={classes.container}>

                <div test-handle="hourCol" className={classes.hourCol}>

                    {

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

                    <div test-handle="col1" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = styleCell(activeC1, "col1", item, props, classes)
                                return cell

                            })

                        }

                    </div>


                    <div test-handle="col2" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = styleCell(activeC2, "col2", item, props, classes)
                                return cell

                            })

                        }

                    </div>

                    <div test-handle="col3" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = styleCell(activeC3, "col3", item, props, classes)
                                return cell

                            })

                        }

                    </div>

                    <div test-handle="col4" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = styleCell(activeC4, "col4", item, props, classes)
                                return cell

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

}

export default Grid