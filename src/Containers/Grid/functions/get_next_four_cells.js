const get_next_four_cells = (col, row) => {

    switch (col) {

        case "col1":

            return [

                { col: "1", row: row },
                { col: "2", row: row },
                { col: "3", row: row },
                { col: "4", row: row }

            ]

        case "col2":

            return [

                { col: "2", row: row },
                { col: "3", row: row },
                { col: "4", row: row },
                { col: "1", row: `${parseInt(row) + 1}` }

            ]

        case "col3":

            return [

                { col: "3", row: row },
                { col: "4", row: row },
                { col: "1", row: `${parseInt(row) + 1}` },
                { col: "2", row: `${parseInt(row) + 1}` }

            ]

        case "col4":

            return [

                { col: "4", row: row },
                { col: "1", row: `${parseInt(row) + 1}` },
                { col: "2", row: `${parseInt(row) + 1}` },
                { col: "3", row: `${`${parseInt(row) + 1}`}` }

            ]

        default: return null

    }

}

export default get_next_four_cells