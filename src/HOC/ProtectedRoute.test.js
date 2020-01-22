import React from "react"
import { shallow } from "enzyme"
import { findByTestAttribute } from "../Utils/TestingUtils"
import configureStore from "redux-mock-store"
import ProtectedRoute from "./ProtectedRoute"
import * as ReactReduxHooks from "../Utils/hooks"
import thunk from "redux-thunk"
import { useSelector } from "react-redux"

describe("\n\x1b[36mAuthentication screen", () => {

    let store;

    describe("\nRedirects if authenticated\n", () => {

        let component;
        beforeEach(() => {//run before every test

            // component = setComponent();//Sets the component to be used by the test

            store = configureStore([thunk])({
                loggedIn: false,
                validationFailure: null
            });

            jest
                .spyOn(ReactReduxHooks, "useSelector")
                .mockImplementation(state => store.getState());

            component = shallow(<ProtectedRoute store={store} />);

        })

        it("Should redirect if the user is not authenticated", () => {

            component.setProps({authenticated:false})

            const wrapper = findByTestAttribute(component, "redirect")
            expect(wrapper.length).toBe(1)

        })

        it("Should render the correct route if the user is authenticated", () => {

            component.setProps({authenticated:true})

            const wrapper = findByTestAttribute(component, "route")
            expect(wrapper.length).toBe(1)

        })

    })

})