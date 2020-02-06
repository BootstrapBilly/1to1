import React from "react"

const styleCell = (activeCol, colSeg, item, props, classes) => {

    const segmentActive = activeCol.find(activeItem => activeItem[0] === item)

    if (segmentActive) {

        return <div test-handle={`${colSeg}-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClickActive}>

            <div className={

                segmentActive[4] === "first" ? classes.activeSegmentFirst
                    : segmentActive[4] === "last" ? classes.activeSegmentLast
                        : segmentActive[4] === "overFlow" ? classes.activeSegmentOverFlow
                            : segmentActive[4] === "underFlow" ? classes.activeSegmentUnderFlow
                                : segmentActive[4] === "underFlowFirst" ? classes.activeSegmentUnderFlowFirst
                                    : segmentActive[4] === "underFlowLast" ? classes.activeSegmentUnderFlowLast
                                        : segmentActive[4] === "overFlowFirst" ? classes.activeSegmentOverFlowFirst
                                            : segmentActive[4] === "overFlowLast" ? classes.activeSegmentOverFlowLast
                                                : segmentActive[1] ? classes.activeSegmentJoined
                                                    : classes.activeSegment}

                style={{ backgroundColor: segmentActive[3] === 45 ? "#d7743b" : segmentActive[3] === 60 ? "lightseagreen" : null }}

            >{segmentActive[2]}


            </div>

        </div>
    }

    else return <div test-handle={`${colSeg}-seg${item}`} className={classes.rowSegment} key={item} onClick={props.onClickEmpty.bind(this, `${colSeg}-seg${item}`)}></div>

}

export default styleCell