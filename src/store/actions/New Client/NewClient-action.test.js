
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { SUBMISSIONFAILURE, SUBMISSIONSUCCESS, GENERIC, addNewClient } from './NewClient-action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Send add a new client request', () => {

    beforeEach(() => {//SET UP THE MOXIOS MIDDLEWARE

        moxios.install();

    });

    afterEach(() => {//remove the moxios middleware

        moxios.uninstall();

    });

    it('Dispatches SUBMISSIONFAILURE after receiving a 424 from the api', () => {

        const mockError = error => ({ status: 424, response: error })

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith(mockError({success:false}));

        });

        const expectedActions = [{type:SUBMISSIONFAILURE}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(addNewClient()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });

    it('Dispatches GENERIC after receiving a 500 from the api', () => {

        const mockError = error => ({ status: 500, response: error })

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith(mockError({success:false}));

        });

        const expectedActions = [{type:GENERIC}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(addNewClient()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });


    it('Dispatches SUBMISSIONSUCCESS after receiving success:true from the api', () => {

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith({//then mock a response

                response: { success: true },//with the response returned by the api

            });
        });

        const expectedActions = [{type:SUBMISSIONSUCCESS}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(addNewClient()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });
    
 });