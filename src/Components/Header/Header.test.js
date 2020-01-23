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

        it("Should render a total customers header", () => {

            const wrapper = findByTestAttribute(component, "total")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a next customer header", () => {

            const wrapper = findByTestAttribute(component, "amount")
            expect(wrapper.length).toBe(1)

        })


    })

})


