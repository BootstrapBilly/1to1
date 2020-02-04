import React, { useEffect } from "react"
import classes from "./grid.module.css"

import PropTypes, { array } from "prop-types"
import { useDispatch, useSelector } from "react-redux"

import { fetchAppointments } from "../../store/actions/Fetch Appointments/fetch-appointment-action"

const Grid = props => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchAppointments(props.date))

    }, [])

    const appointments = useSelector(state => state.fetchAppointments.appointments)

    const activeC1 = []
    const activeC2 = []
    const activeC3 = []
    const activeC4 = []

    appointments.forEach(item => {

        const appointmentInfo = [item.row, item.joined, item.name, item.length]
        const appointmentMulti = [item.row, item.joined, null, item.length]

        switch (item.length) {

            case 15:

                switch (item.col) {

                    case "1": return activeC1.push(appointmentInfo) 
                    case "2": return activeC2.push(appointmentInfo)
                    case "3": return activeC3.push(appointmentInfo)
                    case "4": return activeC4.push(appointmentInfo)
                    default: return

                }

            case 30:

                switch (item.col) {

                    case "1": {
                        activeC1.push([...appointmentInfo, "first"])
                        return activeC2.push([...appointmentMulti, "last"])
                    } 

                    case "2": {
                        activeC2.push([...appointmentInfo, "first"])
                        return activeC3.push([...appointmentMulti, "last"])
                    } 

                    case "3": {
                        activeC3.push([...appointmentInfo, "first"])
                        return activeC4.push([...appointmentMulti, "last"])
                    }

                    case "4": {
                        activeC4.push([...appointmentInfo, "overFlowFirst"])
                        return activeC1.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "underFlowLast"])
                    }
                    default: return

                }

            case 45:

                switch (item.col) {

                    case "1": {
                        activeC1.push([...appointmentInfo, "first"])
                        activeC2.push([...appointmentMulti])
                        return activeC3.push([...appointmentMulti, "last"])
                    } 

                    case "2": {
                        activeC2.push([...appointmentInfo, "first"])
                        activeC3.push([...appointmentMulti])
                        return activeC4.push([...appointmentMulti, "last"])
                    } 

                    case "3": {
                        activeC3.push([...appointmentInfo, "first"])
                        activeC4.push([...appointmentMulti, "overFlow"])
                        return activeC1.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "underFlowLast"])
                    }

                    case "4": {
                        activeC4.push([...appointmentInfo, "overFlowFirst"])
                        activeC1.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "underFlow"])
                        return activeC2.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "last"])
                    }
                    default: return

                }

            case 60:

                switch (item.col) {

                    case "1": {
                        activeC1.push([...appointmentInfo, "first"])
                        activeC2.push([...appointmentMulti])
                        activeC3.push([...appointmentMulti])
                        return activeC4.push([...appointmentMulti, "last"])
                    } 

                    case "2": {
                        activeC2.push([...appointmentInfo, "first"])
                        activeC3.push([...appointmentMulti])
                        activeC4.push([...appointmentMulti, "overFlow"])
                        return activeC1.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "underFlowLast"])
                    } 

                    case "3": {
                        activeC3.push([...appointmentInfo, "first"])
                        activeC4.push([...appointmentMulti, "overFlow"])
                        activeC1.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "underFlow"])
                        return activeC2.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "last"])
                    }

                    case "4": {
                        activeC4.push([...appointmentInfo, "overFlowFirst"])
                        activeC1.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "underFlow"])
                        activeC2.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length])
                        activeC3.push([(parseInt(item.row) + 1).toString(), item.joined, null, item.length, "last"])
                    }
                    default: return

                }

        }

    })

    // console.log(appointments)
    console.log(activeC1)
    // console.log(activeC2)
    // console.log(activeC3)
    // console.log(activeC4)


    // const activeC1 = [
    //    // ["1", false, "Loren"], ["2", true, "Jeff"], ["3", false, "John"], ["5", true, "1 Hour"], ["7", false, "Ben"]
    // ]
    // // const activeC2 = [
    // //   //  ["2", true, null], ["5", true, null], ["6", true, "Jen"], ["7", false, "Den"]
    // // ]
    // const activeC3 = [
    //     //["1", false, "Jasper"], ["2", false, "Shenice"], ["3", true, "Deshawn"], ["5", true, null], ["6", true, null], ["7", false, "Pen"]
    // ]
    // const activeC4 = [
    //   //  ["1", false, "Singh"], ["3", true], ["5", true, null], ["6", true, null], ["7", false, "Ken"]
    // ]

    const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    const setCellType = (activeCol, colSeg, item) => {

        const segmentActive = activeCol.find(activeItem => activeItem[0] === item)

        if (segmentActive) {

    return <div test-handle={`${colSeg}-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClickActive}>

                <div className={

                    segmentActive[4] === "first" ? classes.activeSegmentFirst 
                    :segmentActive[4] === "last" ? classes.activeSegmentLast
                    :segmentActive[4] === "overFlow" ? classes.activeSegmentOverFlow
                    :segmentActive[4] === "underFlow" ? classes.activeSegmentUnderFlow
                    :segmentActive[4] === "underFlowFirst" ? classes.activeSegmentUnderFlowFirst
                    :segmentActive[4] === "underFlowLast" ? classes.activeSegmentUnderFlowLast
                    :segmentActive[4] === "overFlowFirst" ? classes.activeSegmentOverFlowFirst
                    :segmentActive[4] === "overFlowLast" ? classes.activeSegmentOverFlowLast
                    :segmentActive[1] ? classes.activeSegmentJoined
                    :classes.activeSegment} 
                    
                    style={{backgroundColor : segmentActive[3] === 45 ? "#d7743b" : segmentActive[3] === 60 ? "lightseagreen" : null }}
                    
                    >{segmentActive[2]}
                    
                    
                </div>

            </div>
        }

        else return <div test-handle={`${colSeg}-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClickEmpty.bind(this, `${colSeg}-seg${item}`)}></div>

    }

    return (

        <section className={classes.section} style={{height: props.fullSize ? "90vh" : null}}>

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

                        ["0mins", "15mins", "30mins", "45mins"].map(item => {

                            const sliced = item.slice(0, -4)

                            return <div test-handle={item} className={classes.minRowSegment} key={item}>{sliced}</div>
                        })

                    }

                </div>

                <div test-handle="inner-container" className={classes.innerContainer}>

                    <div test-handle="col1" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = setCellType(activeC1, "col1", item)
                                return cell

                            })

                        }

                    </div>


                    <div test-handle="col2" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = setCellType(activeC2, "col2", item)
                                return cell

                            })

                        }

                    </div>

                    <div test-handle="col3" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = setCellType(activeC3, "col3", item)
                                return cell

                            })

                        }

                    </div>

                    <div test-handle="col4" className={classes.column}>

                        {

                            rows.map(item => {

                                const cell = setCellType(activeC4, "col4", item)
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