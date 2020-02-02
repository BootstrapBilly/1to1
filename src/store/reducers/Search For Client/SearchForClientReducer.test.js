import SearchForClient from "./SearchForClient-reducer"

describe("Search for client reducer", ()=> {

    const initialState = {//set the initial state

        clients : [],
        noClients : null,
        error : null
    }

    it("Should return default state", ()=> {

        const newState = SearchForClient(initialState, "Doesn't exist");

        expect(newState).toEqual(initialState)

    })

    it("Clients found", ()=> {

        const newState = SearchForClient(undefined, {type:"CLIENTS_FOUND", clients: ["Mr a", "Mr b"]});

        expect(newState).toEqual({ ...initialState, clients:["Mr a", "Mr b"], noClients: false, error:null})

    })

    it("No clients found", ()=> {

        const newState = SearchForClient(undefined, {type:"NO_CLIENTS_FOUND"});

        expect(newState).toEqual({ ...initialState, clients:[], noClients: true, error:null})

    })

    it("Generic error", ()=> {

        const newState = SearchForClient(undefined, {type:"GENERIC"});

        expect(newState).toEqual({ ...initialState, clients:[], noClients: null, error:true})

    })

})