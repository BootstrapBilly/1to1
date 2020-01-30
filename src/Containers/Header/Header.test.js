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

        it("Should render a side panel", () => {

            const wrapper = findByTestAttribute(component, "side-panel")
            expect(wrapper.length).toBe(1)


        })

        it("Should render a fullscreen area which closes the panel when clicked", () => {

            const wrapper = findByTestAttribute(component, "closeArea")
            expect(wrapper.length).toBe(1)

        })

        it("Prop types are correct", () => {

            const propsToBeTested = {text: "string"} //emulate the props being passed in

            const propsError = checkProps(Header, propsToBeTested)

            expect(propsError).toBeUndefined();//expect no error to be return

        })


    })

})


