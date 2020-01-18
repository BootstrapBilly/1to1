import React from "react"
import { shallow } from "enzyme"
import Button from "./Button"
import { findByTestAttribute, checkProps } from "../../Utils/TestingUtils"

const setComponent = (props = {}) => {//set the component to be tested
    //Creates the component to be used in the test along with the props
    const component = shallow(<Button {...props} />)
    return component

}

describe("\n\x1b[36mButton", () => {

    describe("\nRenders correctly\n", () => {

        let component;
        beforeEach(() => {//run before every test

            component = setComponent();//Sets the component to be used by the test

        })

        it("Should render an input", () => {

            const wrapper = findByTestAttribute(component, "button")
            expect(wrapper.length).toBe(1)

        })

        it("Prop types are correct", () => {

            const propsToBeTested = { text: "String", onClick: () => { } } //emulate the props being passed in

            const propsError = checkProps(Button, propsToBeTested)

            expect(propsError).toBeUndefined();//expect no error to be return

        })

        it("Should fire a function when it is clicked", () => {

            const mockFn = jest.fn() //define a mock function

            const component = shallow(<Button handleClick={mockFn} />) //create a shallow copy of the component and pass it the prop to test

            component.find("button").simulate("click")//simulate a click event on it

            expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

        })

    })

})


