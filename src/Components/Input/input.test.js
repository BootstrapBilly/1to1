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

        it("Prop types are correct", () => {

            const propsToBeTested = { enterKeyHandler: ()=>{} } //emulate the props being passed in

            const propsError = checkProps(Input, propsToBeTested)

            expect(propsError).toBeUndefined();//expect no error to be return

        })

    })

})


