import React from "react"
import { shallow } from "enzyme"
import Input from "./input"
import { findByTestAttribute, checkProps } from "../../Utils/TestingUtils"

const setComponent = (props = {}) => {//set the component to be tested
    //Creates the component to be used in the test along with the props
    const component = shallow(<Input {...props} />)
    return component

}

describe("\n\x1b[36mLogo", () => {

    describe("\nRenders correctly\n", () => {

        let component;
        beforeEach(() => {//run before every test

            component = setComponent();//Sets the component to be used by the test

        })

        it("Should render an input", () => {

            const wrapper = findByTestAttribute(component, "input")
            expect(wrapper.length).toBe(1)

        })

        it("Should call a handle change function when typed in", () => {
 
            const mockFn = jest.fn() //define a mock function

            const component = shallow(<Input handleChange={mockFn} />) //create a shallow copy of the component and pass it the prop to test

            component.find("input").simulate("change")//simulate a click event on it

            expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

        })

    })

})


