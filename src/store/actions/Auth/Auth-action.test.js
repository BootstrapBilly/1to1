
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { LOGINFAILURE, LOGINSUCCESS, LOCKOUT, GENERIC, login } from './Auth-action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Send login request', () => {

    beforeEach(() => {//SET UP THE MOXIOS MIDDLEWARE

        moxios.install();

    });

    afterEach(() => {//remove the moxios middleware

        moxios.uninstall();

    });

    it('Dispatches LOGINFAILURE after receiving a 424 from the api', () => {

        const mockError = error => ({ status: 424, response: error })

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith(mockError({success:false}));

        });

        const expectedActions = [{type:LOGINFAILURE}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(login()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });

    it('Dispatches LOCKOUT after receiving a 418 from the api', () => {

        const mockError = error => ({ status: 418, response: error })

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith(mockError({lockout:true}));

        });

        const expectedActions = [{type:LOCKOUT}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(login()).then(() => {

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

        return store.dispatch(login()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });


    it('Dispatches LOGINSUCCESS after receiving success:true from the api', () => {

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();//mock a moxios request

            request.respondWith({//then mock a response

                response: { success: true },//with the response returned by the api

            });
        });

        const expectedActions = [{type:LOGINSUCCESS}]//set up the action expected to be received

        const store = mockStore()//set up the mock store

        return store.dispatch(login()).then(() => {

            expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

        });

    });



//     it('Dispatches LOCKOUT after receiving lockout:true from the api', () => {

//         moxios.wait(() => {

//             const request = moxios.requests.mostRecent();//mock a moxios request

//             request.respondWith({//then mock a response

//                 response: { lockout: true },//with the response returned by the api

//             });
//         });

//         const expectedActions = [{type:LOCKOUT}]//set up the action expected to be received

//         const store = mockStore()//set up the mock store

//         return store.dispatch(login()).then(() => {

//             expect(store.getActions()).toEqual(expectedActions);//compare the result to the expected

//         });

//     });
    
 });