import React from "react"
import { shallow } from "enzyme"
import Form from "./Form"
import { findByTestAttribute } from "../../Utils/TestingUtils"
import configureStore from "redux-mock-store"
import * as ReactReduxHooks from "../../Utils/hooks"
import thunk from "redux-thunk"
import { addNewClient } from "../../store/actions/New Client/NewClient-action"

describe("\n\x1b[36mNew customer form", () => {

    let store;

    describe("\nRenders correctly\n", () => {

        let component;
        beforeEach(() => {//run before every test

            store = configureStore([thunk])({

                submissionFailure : null,
                successfulAddition : null,
                genericError: null
            
            });

            jest
                .spyOn(ReactReduxHooks, "useSelector")
                .mockImplementation(state => store.getState());

            jest
                .spyOn(ReactReduxHooks, "useDispatch")
                .mockImplementation(() => store.dispatch);

            component = shallow(<Form store={store} />);

        })

        it("Should render a container", () => {

            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a notes input container", () => {

            const wrapper = findByTestAttribute(component, "notes-container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a notes input prompt", () => {

            const wrapper = findByTestAttribute(component, "notes-prompt")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a notes input", () => {

            const wrapper = findByTestAttribute(component, "notes-input")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a name input", () => {

            const wrapper = findByTestAttribute(component, "name-input")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a phone-input", () => {

            const wrapper = findByTestAttribute(component, "phone-input")
            expect(wrapper.length).toBe(1)

        })

        it("Should render an add button", () => {

            const wrapper = findByTestAttribute(component, "button")
            expect(wrapper.length).toBe(1)

        })

    })

    describe("\nProduces correct validation errors\n", () => {

        let component;
        beforeEach(() => {//run before every test

            store = configureStore([thunk])({

                submissionFailure : null,
                successfulAddition : null,
                genericError: null
            
            });

            jest
                .spyOn(ReactReduxHooks, "useSelector")
                .mockImplementation(state => store.getState());

            jest
                .spyOn(ReactReduxHooks, "useDispatch")
                .mockImplementation(() => store.dispatch);

            component = shallow(<Form store={store} />);

        })

        
        it("Should render an add button", () => {

            const wrapper = findByTestAttribute(component, "button")
            expect(wrapper.length).toBe(1)

        })

    })

})


