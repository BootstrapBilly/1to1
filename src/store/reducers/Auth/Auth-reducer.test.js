import authReducer from "./Auth-reducer"

describe("Auth reducer", ()=> {

    const initialState = {//set the initial state

        loggedIn: false,
        token:null,
        validationFailure: false,
        lockout: false,
        genericError:false
    
    }

    it("Should return default state", ()=> {

        const newState = authReducer(initialState, "Doesn't exist");

        expect(newState).toEqual(initialState)

    })

    it("Login failure", ()=> {

        const newState = authReducer(undefined, {type:"LOGINFAILURE"});

        expect(newState).toEqual({ ...initialState, validationFailure: true})

    })

    it("Login success", ()=> {

        const newState = authReducer(undefined, {type:"LOGINSUCCESS", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmVyaWZpZWQgQ29uc3VsdGFudCIsImlhdCI6MTU4MDkyNTMxMSwiZXhwIjoxNTgwOTI4OTExfQ.RIi8RaSDOm3MpySKAiU95UfyFKtmtjeQm8OBpYeAZ-g"});

        expect(newState).toEqual({ ...initialState, validationFailure: false, loggedIn:true, token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmVyaWZpZWQgQ29uc3VsdGFudCIsImlhdCI6MTU4MDkyNTMxMSwiZXhwIjoxNTgwOTI4OTExfQ.RIi8RaSDOm3MpySKAiU95UfyFKtmtjeQm8OBpYeAZ-g"})

    })

    it("User lockout", ()=> {

        const newState = authReducer(undefined, {type:"LOCKOUT"});

        expect(newState).toEqual({ ...initialState, validationFailure: false, loggedIn:false, lockout: true})

    })

    it("Generic error", ()=> {

        const newState = authReducer(undefined, {type:"GENERIC"});

        expect(newState).toEqual({ ...initialState, validationFailure: false, loggedIn:false, lockout: false, genericError:true})

    })


})
