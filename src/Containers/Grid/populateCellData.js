const populateCellData = (appointments, activeC1, activeC2, activeC3, activeC4) => {

    return appointments.forEach(item => {

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

}

export default populateCellData