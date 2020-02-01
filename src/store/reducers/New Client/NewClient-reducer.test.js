import NewClient from "./NewClient-reducer"

describe("Auth reducer", ()=> {

    const initialState = {//set the initial state

        submissionFailure : null,
        successfulAddition : null,
        genericError : null,
    
    }

    it("Should return default state", ()=> {

        const newState = NewClient(initialState, "Doesn't exist");

        expect(newState).toEqual(initialState)

    })

    it("Submission failure", ()=> {

        const newState = NewClient(undefined, {type:"SUBMISSIONFAILURE"});

        expect(newState).toEqual({ ...initialState, submissionFailure : true})

    })

    it("Submission success", ()=> {

        const newState = NewClient(undefined, {type:"SUBMISSIONSUCCESS"});

        expect(newState).toEqual({ ...initialState, successfulAddition : true})

    })

    it("Reset state", ()=> {

        const newState = NewClient(undefined, {type:"RESET"});

        expect(newState).toEqual({ ...initialState, submissionFailure : true, successfulAddition : null, genericError:null})

    })

    it("Generic error", ()=> {

        const newState = NewClient(undefined, {type:"GENERIC"});

        expect(newState).toEqual({ ...initialState, genericError: true})

    })


})