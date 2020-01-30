import React from "react"
import classes from "./grid.module.css"

const Grid = props => {

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

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => <div test-handle={`col1-seg${item}`} className={classes.rowSegment} key={item}></div>)

                        }

                    </div>


                    <div test-handle="col2" className={classes.column}>

                        {

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => <div test-handle={`col2-seg${item}`} className={classes.rowSegment} key={item}></div>)

                        }

                    </div>

                    <div test-handle="col3" className={classes.column}>

                        {

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => <div test-handle={`col3-seg${item}`} className={classes.rowSegment} key={item}></div>)

                        }

                    </div>

                    <div test-handle="col4" className={classes.column}>

                        {

                            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => <div test-handle={`col4-seg${item}`} className={classes.rowSegment} key={item}></div>)

                        }

                    </div>

                </div>

            </div>

        </section>
    )

}

export default Grid