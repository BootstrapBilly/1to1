//core react
import React from "react"

/*takes in the props.column of the cell, 
The number of the props.column as "col1", "col2" ect, the cell data,
The row number, (current mapping passed in by grid),
Props of grid,
css props.classes of grid */

const StyleCell = (props) => {

    const rowData = props.column.find(item => item[0] === props.rowNumber)//search the given props.column to see if any of its rows have appointment data

    if (rowData) {//if any rows do have data

        return (<div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.rowSegment} key={props.rowNumber} onClick={props.onClickActive.bind(this, {length: rowData[3], id:rowData[4]})} 
        
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
                                                    
                                                    rowData[3] === 60 ? props.classes.quad:

                                                    null,                                       
                                                    
                                                    props.overWriteClass].join(" ") }

                                                //otherwise apply a single style class

            //output the name of the appointment holder, or null if it is a joined cell
            >{rowData[2]}


            </div>

        </div>)

    } 
    
    else if(props.rescheduleMode){


        if(props.colNumber === "col1"){

            console.log(props.rowNumber)

 

            const  first = {
                
                col:props.next4.one.slice(4,5),
                row:props.next4.one.slice(-1)
            
            }

            const  second = {

                col:props.next4.two.slice(4,5),
                row:props.next4.two.slice(-1)
            
            }

            const third = {

                col:props.next4.three.slice(4,5),
                row:props.next4.three.slice(-1)
            
            }

            const last = {

                col:props.next4.four.slice(4,5),
                row:props.next4.four.slice(-1)
            
            }

            
        // console.log(first)
        // console.log(second)
        // console.log(third)
        // console.log(last)
        // console.log(props.appointments)

        for (let item of props.appointments){

            // console.log(item)
            // console.log(first)
            // console.log(second)
            // console.log(third)
            // console.log(last)

            if(
                
                (item.col === first.col && item.row === first.row) ||
                (item.col === second.col && item.row === second.row) ||
                (item.col === third.col && item.row === third.row) ||
                (item.col === last.col && item.row === last.row)
                
                ) {
                    console.log("triggered")

                    return (<div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.rowSegment} key={props.rowNumber} onClick={props.onClickEmpty.bind(this, `${props.colNumber}-seg${props.rowNumber}`)}
   
   // ting={props.handleRescheduleMode.bind(this, props.rowNumber)}
    
    ></div>)

                }
                
        }


        }


        return (
    
        <div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.availableSegment} key={props.rowNumber}>
        
        <div className={props.classes.emptySegment}
   
        // ting={props.handleRescheduleMode.bind(this, props.rowNumber)}
         
         ></div>
         
         </div>)

    }

    else return (<div test-handle={`${props.colNumber}-seg${props.rowNumber}`} className={props.classes.rowSegment} key={props.rowNumber} onClick={props.onClickEmpty.bind(this, `${props.colNumber}-seg${props.rowNumber}`)}
   
   // ting={props.handleRescheduleMode.bind(this, props.rowNumber)}
    
    ></div>)

}

export default StyleCell