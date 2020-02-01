import React from "react"
import classes from "./grid.module.css"

import PropTypes from "prop-types"

const Grid = props => {

    const activeC1 = [["1", false, "Loren"], ["2", true, "Jeff"], ["3", false, "John"], ["5", true, "1 Hour"], ["7", false, "Ben"]]
    const activeC2 = [["2", true, null], ["5", true, null], ["6", true, "Jen"], ["7", false, "Den"]]
    const activeC3 = [["1", false, "Jasper"], ["2", false, "Shenice"], ["3", true, "Deshawn"], ["5", true, null], ["6", true, null], ["7", false, "Pen"]]
    const activeC4 = [["1", false, "Singh"], ["3", true], ["5", true, null], ["6", true, null], ["7", false, "Ken"]]

    const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    const setCellType = (activeCol, colSeg, item) => {

        const segmentActive = activeCol.find(activeItem => activeItem[0] === item)

        if (segmentActive) {

            return <div test-handle={`${colSeg}-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClickActive}>
                <div className={segmentActive[1] ? classes.activeSegmentJoined : classes.activeSegment}>{segmentActive[2]}</div></div>
        }

        else return <div test-handle={`${colSeg}-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClickEmpty}></div>

    }

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