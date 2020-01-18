
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { LOGINFAILURE, login } from './Auth-action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Send login request', () => {

    beforeEach(() => {//SET UP THE MOXIOS MIDDLEWARE

        moxios.install();

    });

    afterEach(() => {//remove the moxios middleware

        moxios.uninstall();

    });

    it('Dispatches LOGINFAILURE after receiving success:false from the api', () => {

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith({//then mock a response

                status: 424,
                response: { success: false },//with the response returned by the api

            });
        });

        const expectedActions = [{type:LOGINFAILURE}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(login()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });
    
});