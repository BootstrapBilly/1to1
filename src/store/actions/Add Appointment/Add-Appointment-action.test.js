
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { SET_CLIENT, SUBMISSION_FAILURE, SUBMISSION_SUCCESS, RESET, setAppointmentHolder, addAppointment, reset } from './Add-Appointment-action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Set the appointment holder client", ()=> {

    it('Dispatches SET_CLIENT after setAppointmentHolder is called', () => {

        const expectedActions = [{type:SET_CLIENT}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(setAppointmentHolder()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });

    it('Dispatches RESET after reset is called', () => {

        const expectedActions = [{type:RESET}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(reset()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });

})

describe('Send add a new appointment request', () => {

    beforeEach(() => {//SET UP THE MOXIOS MIDDLEWARE

        moxios.install();

    });

    afterEach(() => {//remove the moxios middleware

        moxios.uninstall();

    });

    it('Dispatches SUBMISSION_FAILURE after receiving a 500 from the api', () => {

        const mockError = error => ({ status: 500, response: error })

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith(mockError({success:false}));

        });

        const expectedActions = [{type:SUBMISSION_FAILURE}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch((addAppointment())).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });

    it('Dispatches SUBMISSION_SUCCESS after receiving a success status from the api', () => {

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith({//then mock a response

                response: { success: true },//with the response returned by the api

            });
        });

        const expectedActions = [{type:SUBMISSION_SUCCESS}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(addAppointment()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });
    
 });