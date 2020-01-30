import React from "react"
import classes from "./grid.module.css"

const Grid = props => {

    const activeC1 = [["1", false, "Loren"], ["2", true, "Jeff"], ["3", false, "John"], ["5", true, "1 Hour"], ["7", false, "Ben"]]
    const activeC2 = [["2", true, null], ["5", true, null], ["6", true, "Jen"], ["7", false, "Den"]]
    const activeC3 = [["1", false, "Jasper"], ["2", false, "Shenice"], ["3", true, "Deshawn"], ["5", true, null], ["6", true, null], ["7", false, "Pen"]]
    const activeC4 = [["1", false, "Singh"], ["3", true], ["5", true, null], ["6", true, null], ["7", false, "Ken"]]

    return (

        <section className={classes.section}>

            <div test-handle="container" className={classes.container}>

                <div test-handle="hourCol" className={classes.hourCol}>

                    {

                        ["9am", "10am", "11am", "12pm", "13pm", "14pm", "15pm", "16pm", "17pm", "18pm"].map(item => {

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

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => {

                                const segmentActive = activeC1.find(activeItem => activeItem[0] === item)

                                if (segmentActive) {

                                    return <div test-handle={`col1-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClick}>
                                        <div className={segmentActive[1] ? classes.activeSegmentJoined : classes.activeSegment}>{segmentActive[2]}</div></div>
                                }

                                else return <div test-handle={`col1-seg${item}`} className={classes.rowSegment} key={item}></div>

                            })

                        }

                    </div>


                    <div test-handle="col2" className={classes.column}>

                        {

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => {

                                const segmentActive = activeC2.find(activeItem => activeItem[0] === item)

                                if (segmentActive) {

                                    return <div test-handle={`col2-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClick} > 
                                        <div className={segmentActive[1] ? classes.activeSegmentJoined : classes.activeSegment}>{segmentActive[2]}</div></div>
                                }

                                else return <div test-handle={`col2-seg${item}`} className={classes.rowSegment} key={item}></div>

                            })

                        }

                    </div>

                    <div test-handle="col3" className={classes.column}>

                        {

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => {

                                const segmentActive = activeC3.find(activeItem => activeItem[0] === item)

                                if (segmentActive) {

                                    return <div test-handle={`col3-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClick}>
                                        <div className={segmentActive[1] ? classes.activeSegmentJoined : classes.activeSegment}>{segmentActive[2]}</div></div>
                                }

                                else return <div test-handle={`col3-seg${item}`} className={classes.rowSegment} key={item}></div>

                            })

                        }

                    </div>

                    <div test-handle="col4" className={classes.column}>

                        {

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => {

                                const segmentActive = activeC4.find(activeItem => activeItem[0] === item)

                                if (segmentActive) {

                                    return <div test-handle={`col4-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClick}>
                                        <div className={segmentActive[1] ? classes.activeSegmentJoined : classes.activeSegment}>{segmentActive[2]}</div></div>
                                }

                                else return <div test-handle={`col4-seg${item}`} className={classes.rowSegment} key={item}></div>

                            })

                        }

                    </div>

                </div>

            </div>

        </section>
    )

}

export default Grid