import React from "react"
import { shallow } from "enzyme"
import FormInput from "./FormInput"
import { findByTestAttribute } from "../../../Utils/TestingUtils"

const setComponent = (props = {}) => {//set the component to be tested
    //Creates the component to be used in the test along with the props
    const component = shallow(<FormInput {...props} />)
    return component

}

describe("\n\x1b[36mForm component", () => {

    describe("\nRenders correctly\n", () => {

        let component;
        beforeEach(() => {//run before every test

            component = setComponent();//Sets the component to be used by the test

        })

        it("Should render a container", () => {

            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render an input header", () => {

            const wrapper = findByTestAttribute(component, "input-header")
            expect(wrapper.length).toBe(1)

        })

        it("Should render an input prompt", () => {

            const wrapper = findByTestAttribute(component, "input-prompt")
            expect(wrapper.length).toBe(1)

        })

        it("Should render an input error", () => {

            const wrapper = findByTestAttribute(component, "input-error")
            expect(wrapper.length).toBe(1)

        })

        it("Should render an input box", () => {

            const wrapper = findByTestAttribute(component, "input-box")
            expect(wrapper.length).toBe(1)

        })


    })

})


