const compute_classname = (special_style, props, longer_than_15, appointment_length, classes) => {

    const classArray = []

    if(special_style === "first") classArray.push(classes.activeSegmentFirst)
    else if(special_style === "last") classArray.push(classes.activeSegmentLast)
    else if(special_style === "overFlow") classArray.push(classes.activeSegmentOverFlow)
    else if(special_style === "underFlow") classArray.push(classes.activeSegmentUnderFlow)
    else if(special_style === "underFlowLast") classArray.push(classes.activeSegmentUnderFlowLast)
    else if(special_style === "overFlowFirst") classArray.push(classes.activeSegmentOverFlowFirst)
    else if(longer_than_15) classArray.push(classes.activeSegmentJoined) 
    else if(!longer_than_15) classArray.push(classes.activeSegment) 
    
    if(appointment_length === 45) classArray.push(classes.triple) 
    else if(appointment_length === 60) classArray.push(classes.quad) 

    return([...classArray, props.overWriteClass].join(" "))

}

export default compute_classname