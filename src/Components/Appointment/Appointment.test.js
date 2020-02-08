import React from "react"
import { shallow } from "enzyme"
import Appointment from "./Appointment"
import { findByTestAttribute, checkProps } from "../../Utils/TestingUtils"

const setComponent = (props = {}) => {//set the component to be tested
    //Creates the component to be used in the test along with the props
    const component = shallow(<Appointment {...props} />)
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
        
        it("Should render a top row", () => {

            const wrapper = findByTestAttribute(component, "topRow")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a Name", () => {

            const wrapper = findByTestAttribute(component, "name")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a cross", () => {

            const wrapper = findByTestAttribute(component, "cross")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a mid row", () => {

            const wrapper = findByTestAttribute(component, "midRow")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a time", () => {

            const wrapper = findByTestAttribute(component, "time")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a date", () => {

            const wrapper = findByTestAttribute(component, "date")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a lower mid row", () => {

            const wrapper = findByTestAttribute(component, "lowerMidRow")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a phone number", () => {

            const wrapper = findByTestAttribute(component, "phone")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a notes row", () => {

            const wrapper = findByTestAttribute(component, "notesRow")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a notes container", () => {

            const wrapper = findByTestAttribute(component, "notes")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a bottom row", () => {

            const wrapper = findByTestAttribute(component, "bottomRow")
            expect(wrapper.length).toBe(1)

        })

        it("Should render an edit button", () => {

            const wrapper = findByTestAttribute(component, "edit")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a seen button", () => {

            const wrapper = findByTestAttribute(component, "seen")
            expect(wrapper.length).toBe(1)

        })

        it("Prop types are correct", () => {

            const propsToBeTested = { name: "String", onClickCross: () => { }, onClickEdit: () => { }, onClickSeen: () => { }, time:"string", date:"string", phone:"string", notes:"string"  } //emulate the props being passed in

            const propsError = checkProps(Appointment, propsToBeTested)

            expect(propsError).toBeUndefined();//expect no error to be return

        })

        it("Should fire a function when seen is clicked", () => {

            const mockFn = jest.fn() //define a mock function


            const component = shallow(<Appointment handleClickSeen={mockFn} />) //create a shallow copy of the component and pass it the prop to test

            findByTestAttribute(component, "seen").simulate("click")//simulate a click event on it

            expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

        })
        
        it("Should fire a function when cross is clicked", () => {

            const mockFn = jest.fn() //define a mock function


            const component = shallow(<Appointment handleClickCross={mockFn} />) //create a shallow copy of the component and pass it the prop to test

            findByTestAttribute(component, "cross").simulate("click")//simulate a click event on it

            expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

        })

        it("Should fire a function when edit is clicked", () => {

            const mockFn = jest.fn() //define a mock function


            const component = shallow(<Appointment handleClickEdit={mockFn} />) //create a shallow copy of the component and pass it the prop to test

            findByTestAttribute(component, "edit").simulate("click")//simulate a click event on it

            expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

        })

    })

})


