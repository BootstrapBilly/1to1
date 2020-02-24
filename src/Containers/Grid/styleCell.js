//core react
import React from "react"

/*takes in the props.column of the cell, 
The number of the props.column as "col1", "col2" ect, the cell data,
The row number, (current mapping passed in by grid),
Props of grid,
css props.classes of grid */
import {useSelector} from "react-redux"

const StyleCell = (props) => {

    const currentSelectedAppointment = useSelector(state => state.selectedAppointment.selectedAppointment)

    const rowData = props.column.find(item => item[0] === props.rowNumber)//search the given props.column to see if any of its rows have appointment data

    if (rowData) {//if any rows do have data

        // if(props.colNumber === "col1" && props.rescheduleMode) {
            
        //     console.log(rowData)            
        //     console.log(currentSelectedAppointment)            
        
        // }

        return (<div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.rowSegment} key={props.rowNumber} onClick={props.onClickActive.bind(this, { length: rowData[3], id: rowData[4] })}

        >

            <div className={[

                //Check the tag of each row item and apply the css class accordingly - //* The meanings of the tags are at the top of populateCellData.js
                rowData[5] === "first" ? props.classes.activeSegmentFirst
                    : rowData[5] === "last" ? props.classes.activeSegmentLast
                        : rowData[5] === "overFlow" ? props.classes.activeSegmentOverFlow
                            : rowData[5] === "underFlow" ? props.classes.activeSegmentUnderFlow
                                : rowData[5] === "underFlowLast" ? props.classes.activeSegmentUnderFlowLast
                                    : rowData[5] === "overFlowFirst" ? props.classes.activeSegmentOverFlowFirst

                                        //if no tags are present, check to see if the cell is a joined appointment
                                        : rowData[1] ? props.classes.activeSegmentJoined //if it is, apply the class
                                            : props.classes.activeSegment,

                rowData[3] === 45 ? props.classes.triple :

                    rowData[3] === 60 ? props.classes.quad :

                        null,

                props.overWriteClass].join(" ")}

            //otherwise apply a single style class
            //output the name of the appointment holder, or null if it is a joined cell
            >{rowData[2]}


            </div>

        </div>)

    }


    else return (<div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.rowSegment} key={props.rowNumber} onClick={props.onClickEmpty.bind(this, `${props.colNumber}-seg${props.rowNumber}`)}

    ></div>)

}

export default StyleCell