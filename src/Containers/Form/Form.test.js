import React from "react"
import { shallow } from "enzyme"
import Form from "./Form"
import { findByTestAttribute, checkProps } from "../../Utils/TestingUtils"

const setComponent = (props = {}) => {//set the component to be tested
    //Creates the component to be used in the test along with the props
    const component = shallow(<Form {...props} />)
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

        it("Should render a name input", () => {

            const wrapper = findByTestAttribute(component, "name")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a number input", () => {

            const wrapper = findByTestAttribute(component, "number")
            expect(wrapper.length).toBe(1)

        })

        // it("Prop types are correct", () => {

        //     const propsToBeTested = { name: "String", onClickCross: () => { }, onClickEdit: () => { }, onClickSeen: () => { }, time:"string", date:"string", phone:"string", notes:"string"  } //emulate the props being passed in

        //     const propsError = checkProps(Appointment, propsToBeTested)

        //     expect(propsError).toBeUndefined();//expect no error to be return

        // })

        // it("Should fire a function when edit is clicked", () => {

        //     const mockFn = jest.fn() //define a mock function


        //     const component = shallow(<Appointment handleClickEdit={mockFn} />) //create a shallow copy of the component and pass it the prop to test

        //     findByTestAttribute(component, "edit").simulate("click")//simulate a click event on it

        //     expect(mockFn).toHaveBeenCalled();//expect the mock function to be called

        // })

    })

})


