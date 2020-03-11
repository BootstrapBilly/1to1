/*

Special cell types

first = first cell
first overflow = first cell but appointment overflows onto the next row

last = last cell
last underflow = last cell but the rest of the appointment is on the row above

overflow = not the first or last cell, but some of the appointment onto the row below
underflow = not the first or last cell, but some of the appointment is on the row above

*/

const pushToNextRow = row => (parseInt(row) + 1).toString()

const populateCellData = (appointments, column1, column2, column3, column4) => {//takes in the appointment data from the api, and the 4 arrays of columns

    return appointments.forEach(item => {

        const appointmentInfo = [item.row, item.joined, item.name, item.length, item._id]//Set the appointment info
        const appointmentMulti = [item.row, item.joined, item.name, item.length, item._id]//Set the appointment info, but leave the name null so it can stretch across multiple cells
        const nextRowMulti = [pushToNextRow(item.row), item.joined, item.name, item.length, item._id]//Same as above but pushed down onto the next row

        switch (item.length) {//switch the length of the appointment

            case 15: //if its 15 mins long (A single appointment)

                switch (item.col) { //switch the column ---> WHICH IT STARTS ON <------

                    case "1": return column1.push(appointmentInfo) //col 1 ? push the info to col 1
                    case "2": return column2.push(appointmentInfo) //.... col 2
                    case "3": return column3.push(appointmentInfo) //.... col 3
                    case "4": return column4.push(appointmentInfo) //.... col 4

                    default: return //default, do nothing

                }

            case 30: //if its 30 mins long

                switch (item.col) { //switch the column ---> WHICH IT STARTS ON <------

                    case "1": { //if it starts on col 1, 
                        column1.push([...appointmentInfo, "first"]) //push the whole appointment info array, and add the "first" tag to give it a unique style
                        return column2.push([...appointmentMulti, "last"]) //and on column 2, push the multi appointment info, (Because only the first cell has the name), and the "last" tag to style it
                    } 

                    case "2": { //same as above but starting column 2
                        column2.push([...appointmentInfo, "first"])
                        return column3.push([...appointmentMulti, "last"])
                    } 

                    case "3": {//same as above but starting column 3
                        column3.push([...appointmentInfo, "first"])
                        return column4.push([...appointmentMulti, "last"])
                    }

                    case "4": {//Push the first appointment info onto column 4, however this will overflow onto the next line
                        column4.push([...appointmentInfo, "overFlowFirst"])//so give it the overflow first class
                        return column1.push([...nextRowMulti, "underFlowLast"])//and push appointment info onto the next line col 1 because the appointment overflows
                    }

                    default: return

                }

            case 45:

                switch (item.col) {

                    case "1": {
                        column1.push([...appointmentInfo, "first"])
                        column2.push([...appointmentMulti])
                        return column3.push([...appointmentMulti, "last"])
                    } 

                    case "2": {
                        column2.push([...appointmentInfo, "first"])
                        column3.push([...appointmentMulti])
                        return column4.push([...appointmentMulti, "last"])
                    } 

                    case "3": {
                        column3.push([...appointmentInfo, "first"])
                        column4.push([...appointmentMulti, "overFlow"])
                        return column1.push([...nextRowMulti, "underFlowLast"])
                    }

                    case "4": {
                        column4.push([...appointmentInfo, "overFlowFirst"])
                        column1.push([...nextRowMulti, "underFlow"])
                        return column2.push([...nextRowMulti, "last"])
                    }
                    default: return

                }

            case 60:

                switch (item.col) {

                    case "1": {
                        column1.push([...appointmentInfo, "first"])
                        column2.push([...appointmentMulti])
                        column3.push([...appointmentMulti])
                        return column4.push([...appointmentMulti, "last"])
                    } 

                    case "2": {
                        column2.push([...appointmentInfo, "first"])
                        column3.push([...appointmentMulti])
                        column4.push([...appointmentMulti, "overFlow"])
                        return column1.push([...nextRowMulti, "underFlowLast"])
                    } 

                    case "3": {
                        column3.push([...appointmentInfo, "first"])
                        column4.push([...appointmentMulti, "overFlow"])
                        column1.push([...nextRowMulti, "underFlow"])
                        return column2.push([...nextRowMulti, "last"])
                    }

                    case "4": {
                        column4.push([...appointmentInfo, "overFlowFirst"])
                        column1.push([...nextRowMulti, "underFlow"])
                        column2.push([...nextRowMulti])
                        return column3.push([...nextRowMulti, "last"])
                    }
                    default: return

                }

                default: return

        }

    })

}

export default populateCellData