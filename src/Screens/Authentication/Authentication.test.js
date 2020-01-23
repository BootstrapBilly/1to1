import React from "react"
import { shallow, configure } from "enzyme"
import Authentication from "./Authentication"
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
                validationFailure: true,
                lockout: false,
                genericError:false
            });

            jest
                .spyOn(ReactReduxHooks, "useSelector")
                .mockImplementation(state => store.getState());

            jest
                .spyOn(ReactReduxHooks, "useDispatch")
                .mockImplementation(() => store.dispatch);

            component = shallow(<Authentication store={store} />);

        })

        it("Should render without errors", () => {

            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a logo", () => {

            const wrapper = findByTestAttribute(component, "logo")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a login input", () => {

            const wrapper = findByTestAttribute(component, "input")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a button", () => {

            const wrapper = findByTestAttribute(component, "button")
            expect(wrapper.length).toBe(1)

        })

    })

})
