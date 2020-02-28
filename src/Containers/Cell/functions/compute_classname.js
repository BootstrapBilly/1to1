const compute_classname = (special_style, props, appointment_length, classes, rescheduleMode) => {

    const classArray = []

    if(special_style === "first") classArray.push(classes.sharedFormatting, classes.firstCell, classes.leftRadius)
    else if(special_style === "last") classArray.push(classes.sharedFormatting, classes.lastCell, classes.rightRadius )
    else if(special_style === "overFlow") classArray.push(classes.sharedFormatting, classes.spillsDownToNextLine)
    else if(special_style === "underFlow") classArray.push(classes.sharedFormatting, classes.spillsFromPreviousLine)
    else if(special_style === "underFlowLast") classArray.push(classes.sharedFormatting, classes.lastSpillsFromPrevious, classes.rightRadius)
    else if(special_style === "overFlowFirst") classArray.push(classes.sharedFormatting, classes.firstSpillsToNext, classes.leftRadius)
    else classArray.push(classes.joined)

    if(appointment_length === 15) classArray.push(classes.sharedFormatting, classes.single) 
    else if(appointment_length === 30) classArray.push(classes.sharedFormatting, classes.double) 
    else if(appointment_length === 45) classArray.push(classes.sharedFormatting, classes.triple) 
    else if(appointment_length === 60) classArray.push(classes.sharedFormatting, classes.quad) 

    if(rescheduleMode) classArray.push(classes.greyedOut)

    return([...classArray, props.overWriteClass].join(" "))

}

export default compute_classname