import React from "react"
import { shallow } from "enzyme"
import Grid from "./Grid"
import { findByTestAttribute, checkProps } from "../../Utils/TestingUtils"

const setComponent = (props = {}) => {//set the component to be tested
    //Creates the component to be used in the test along with the props
    const component = shallow(<Grid {...props} />)
    return component

}

describe("\n\x1b[36mButton", () => {

    describe("\nRenders correctly\n", () => {

        let component;
        beforeEach(() => {//run before every test

            component = setComponent();//Sets the component to be used by the test

        })

        it("Should render a container", () => {

            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render an inner container", () => {

            const wrapper = findByTestAttribute(component, "inner-container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a hour column", () => {

            const wrapper = findByTestAttribute(component, "hourCol")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1", () => {

            const wrapper = findByTestAttribute(component, "col1")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2", () => {

            const wrapper = findByTestAttribute(component, "col2")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3", () => {

            const wrapper = findByTestAttribute(component, "col3")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4", () => {

            const wrapper = findByTestAttribute(component, "col4")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a minute row", () => {

            const wrapper = findByTestAttribute(component, "minRow")
            expect(wrapper.length).toBe(1)

        })

        it("Should render 9am", () => {

            const wrapper = findByTestAttribute(component, "9am")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 10am", () => {

            const wrapper = findByTestAttribute(component, "10am")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 11am", () => {

            const wrapper = findByTestAttribute(component, "11am")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 12pm", () => {

            const wrapper = findByTestAttribute(component, "12pm")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 13pm", () => {

            const wrapper = findByTestAttribute(component, "13pm")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 14pm", () => {

            const wrapper = findByTestAttribute(component, "14pm")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 15pm", () => {

            const wrapper = findByTestAttribute(component, "15pm")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 16pm", () => {

            const wrapper = findByTestAttribute(component, "16pm")
            expect(wrapper.length).toBe(1)

        })
        

        it("Should render 17pm", () => {

            const wrapper = findByTestAttribute(component, "17pm")
            expect(wrapper.length).toBe(1)

        })

        it("Should render 18pm", () => {

            const wrapper = findByTestAttribute(component, "18pm")
            expect(wrapper.length).toBe(1)

        })

        it("Should render 0 mins", () => {

            const wrapper = findByTestAttribute(component, "0mins")
            expect(wrapper.length).toBe(1)

        })

        it("Should render 15 mins", () => {

            const wrapper = findByTestAttribute(component, "15mins")
            expect(wrapper.length).toBe(1)

        })

        it("Should render 30 mins", () => {

            const wrapper = findByTestAttribute(component, "30mins")
            expect(wrapper.length).toBe(1)

        })

        it("Should render 45 mins", () => {

            const wrapper = findByTestAttribute(component, "45mins")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 1", () => {

            const wrapper = findByTestAttribute(component, "col1-seg1")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 2", () => {

            const wrapper = findByTestAttribute(component, "col1-seg2")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 3", () => {

            const wrapper = findByTestAttribute(component, "col1-seg3")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 4", () => {

            const wrapper = findByTestAttribute(component, "col1-seg4")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 5", () => {

            const wrapper = findByTestAttribute(component, "col1-seg5")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 6", () => {

            const wrapper = findByTestAttribute(component, "col1-seg6")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 7", () => {

            const wrapper = findByTestAttribute(component, "col1-seg7")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 8", () => {

            const wrapper = findByTestAttribute(component, "col1-seg8")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 9", () => {

            const wrapper = findByTestAttribute(component, "col1-seg9")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 1 segment 10", () => {

            const wrapper = findByTestAttribute(component, "col1-seg10")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 1", () => {

            const wrapper = findByTestAttribute(component, "col2-seg1")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 2", () => {

            const wrapper = findByTestAttribute(component, "col2-seg2")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 3", () => {

            const wrapper = findByTestAttribute(component, "col2-seg3")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 4", () => {

            const wrapper = findByTestAttribute(component, "col2-seg4")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 5", () => {

            const wrapper = findByTestAttribute(component, "col2-seg5")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 6", () => {

            const wrapper = findByTestAttribute(component, "col2-seg6")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 7", () => {

            const wrapper = findByTestAttribute(component, "col2-seg7")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 8", () => {

            const wrapper = findByTestAttribute(component, "col2-seg8")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 9", () => {

            const wrapper = findByTestAttribute(component, "col2-seg9")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 2 segment 10", () => {

            const wrapper = findByTestAttribute(component, "col2-seg10")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 1", () => {

            const wrapper = findByTestAttribute(component, "col3-seg1")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 2", () => {

            const wrapper = findByTestAttribute(component, "col3-seg2")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 3", () => {

            const wrapper = findByTestAttribute(component, "col3-seg3")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 4", () => {

            const wrapper = findByTestAttribute(component, "col3-seg4")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 5", () => {

            const wrapper = findByTestAttribute(component, "col3-seg5")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 6", () => {

            const wrapper = findByTestAttribute(component, "col3-seg6")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 7", () => {

            const wrapper = findByTestAttribute(component, "col3-seg7")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 8", () => {

            const wrapper = findByTestAttribute(component, "col3-seg8")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 9", () => {

            const wrapper = findByTestAttribute(component, "col3-seg9")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 3 segment 10", () => {

            const wrapper = findByTestAttribute(component, "col3-seg10")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 1", () => {

            const wrapper = findByTestAttribute(component, "col4-seg1")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 2", () => {

            const wrapper = findByTestAttribute(component, "col4-seg2")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 3", () => {

            const wrapper = findByTestAttribute(component, "col4-seg3")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 4", () => {

            const wrapper = findByTestAttribute(component, "col4-seg4")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 5", () => {

            const wrapper = findByTestAttribute(component, "col4-seg5")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 6", () => {

            const wrapper = findByTestAttribute(component, "col4-seg6")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 7", () => {

            const wrapper = findByTestAttribute(component, "col4-seg7")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 8", () => {

            const wrapper = findByTestAttribute(component, "col4-seg8")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 9", () => {

            const wrapper = findByTestAttribute(component, "col4-seg9")
            expect(wrapper.length).toBe(1)

        })

        it("Should render column 4 segment 10", () => {

            const wrapper = findByTestAttribute(component, "col4-seg10")
            expect(wrapper.length).toBe(1)

        })
        


    //     it("Prop types are correct", () => {

    //         const propsToBeTested = { name: "String", onClickCross: () => { }, onClickEdit: () => { }, onClickSeen: () => { }, time:"string", date:"string", phone:"string", notes:"string"  } //emulate the props being passed in

    //         const propsError = checkProps(Appointment, propsToBeTested)

    //         expect(propsError).toBeUndefined();//expect no error to be return

    //     })



    //     it("Should fire a function when edit is clicked", () => {

    //         const mockFn = jest.fn() //define a mock function


    //         const component = shallow(<Appointment handleClickEdit={mockFn} />) //create a shallow copy of the component and pass it the prop to test

    //         findByTestAttribute(component, "edit").simulate("click")//simulate a click event on it

    //         expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

    //     })

     })

})


