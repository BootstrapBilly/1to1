import React from "react"
import { shallow, configure } from "enzyme"
import CalendarDate from "./CalendarDate"
import { findByTestAttribute } from "../../Utils/TestingUtils"
import configureStore from "redux-mock-store"
import * as ReactReduxHooks from "../../Utils/hooks"
import thunk from "redux-thunk"

describe("\n\x1b[36mCalendar date screen", () => {

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

                // const setComponent = (props = {}) => {//set the component to be tested
                //     //Creates the component to be used in the test along with the props
                //     const component = shallow(<CalendarDate store={store} {...props} />)
                //     return component
                
                // }

            component = shallow(<CalendarDate store={store}/>);
            
        })

        it("Should render without errors", () => {

            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a header", () => {

            const wrapper = findByTestAttribute(component, "header")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a form", () => {

            const wrapper = findByTestAttribute(component, "form")
            expect(wrapper.length).toBe(1)

        })

        it("Should render a grid of clients", () => {

            const wrapper = findByTestAttribute(component, "grid")
            expect(wrapper.length).toBe(1)

        })

    })

})
