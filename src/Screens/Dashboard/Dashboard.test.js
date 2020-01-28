import React from "react"
import { shallow } from "enzyme"
import Dashboard from "./Dashboard"
import { findByTestAttribute } from "../../Utils/TestingUtils"
import configureStore from "redux-mock-store"
import * as ReactReduxHooks from "../../Utils/hooks"
import thunk from "redux-thunk"

describe("\n\x1b[36mAuthentication screen", () => {

    let store;

    describe("\nRenders correctly\n", () => {

        let component;
        beforeEach(() => {//run before every test

            // component = setComponent();//Sets the component to be used by the test

            store = configureStore([thunk])({
                loggedIn: false,
                validationFailure: false,
                lockout: false,
                genericError:false
            });

            jest
                .spyOn(ReactReduxHooks, "useSelector")
                .mockImplementation(state => store.getState());

            jest
                .spyOn(ReactReduxHooks, "useDispatch")
                .mockImplementation(() => store.dispatch);

            component = shallow(<Dashboard store={store} />);

        })

        it("Should render without errors", () => {

            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a header", () => {

            const wrapper = findByTestAttribute(component, "header")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a next client", () => {

            const wrapper = findByTestAttribute(component, "next-client")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a calendar", () => {

            const wrapper = findByTestAttribute(component, "calendar")
            expect(wrapper.length).toBe(1)

        })

    })

})
