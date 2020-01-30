import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"
import { findByTestAttribute, checkProps } from "../../Utils/TestingUtils"

const setComponent = (props = {}) => {//set the component to be tested
    //Creates the component to be used in the test along with the props
    const component = shallow(<Header {...props} />)
    return component

}

describe("\n\x1b[36mLogo", () => {

    describe("\nRenders correctly\n", () => {

        let component;
        beforeEach(() => {//run before every test

            component = setComponent();//Sets the component to be used by the test

        })

        it("Should render a container", () => {

            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)

        })

        it("Should a hamburger menu", () => {

            const wrapper = findByTestAttribute(component, "hamburger")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a header text", () => {

            const wrapper = findByTestAttribute(component, "header-text")
            expect(wrapper.length).toBe(1)

        })

        it("Should fire a function when the hamburger menu is clicked", () => {

            const mockFn = jest.fn() //define a mock function

            const component = shallow(<Header onClickMenu={mockFn} />) //create a shallow copy of the component and pass it the prop to test

            findByTestAttribute(component, "hamburger").simulate("click")//simulate a click event on it

            expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

        })

        it("Prop types are correct", () => {

            const propsToBeTested = {onClickMenu: () => { }, text: "string"} //emulate the props being passed in

            const propsError = checkProps(Header, propsToBeTested)

            expect(propsError).toBeUndefined();//expect no error to be return

        })


    })

})


