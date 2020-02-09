//core react
import React from "react"

/*takes in the column of the cell, 
The number of the column as "col1", "col2" ect, the cell data,
The row number, (current mapping passed in by grid),
Props of grid,
css classes of grid */

const styleCell = (column, colNumber, rowNumber, props, classes) => {

    const rowData = column.find(item => item[0] === rowNumber)//search the given column to see if any of its rows have appointment data

    if (rowData) {//if any rows do have data

        return <div test-handle={`${colNumber}-seg${rowNumber}`} className={classes.rowSegment} key={rowNumber} onClick={props.onClickActive}>

            <div className={

                //Check the tag of each row item and apply the css class accordingly - //* The meanings of the tags are at the top of populateCellData.js
                rowData[4] === "first" ? classes.activeSegmentFirst
                    : rowData[4] === "last" ? classes.activeSegmentLast
                        : rowData[4] === "overFlow" ? classes.activeSegmentOverFlow
                            : rowData[4] === "underFlow" ? classes.activeSegmentUnderFlow
                                    : rowData[4] === "underFlowLast" ? classes.activeSegmentUnderFlowLast
                                        : rowData[4] === "overFlowFirst" ? classes.activeSegmentOverFlowFirst

                                        //if no tags are present, check to see if the cell is a joined appointment
                                                : rowData[1] ? classes.activeSegmentJoined //if it is, apply the class
                                                    : classes.activeSegment}//otherwise apply a single style class

                //If the appointment is 45 mins long apply an orange colour, otherwise a green for 60 mins, otherwise let the css classes handle it
                style={{ backgroundColor: rowData[3] === 45 ? "#d7743b" : rowData[3] === 60 ? "lightseagreen" : null }}

            //output the name of the appointment holder, or null if it is a joined cell
            >{rowData[2]}


            </div>

        </div>
    }

    else return <div test-handle={`${colNumber}-seg${rowNumber}`} className={classes.rowSegment} key={rowNumber} onClick={props.onClickEmpty.bind(this, `${colNumber}-seg${rowNumber}`)}></div>

}

export default styleCell