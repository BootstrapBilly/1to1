import fetchAppointments from "./fetch-appointment-reducer"

describe("Search for client reducer", ()=> {

    const initialState = {//set the initial state

        appointments : [],
        noAppointments : null,
        error:false

    }

    it("Should return default state", ()=> {

        const newState = fetchAppointments(initialState, "Doesn't exist");

        expect(newState).toEqual(initialState)

    })

    it("Appointments found", ()=> {

        const newState = fetchAppointments(undefined, {type:"APPOINTMENTS_FOUND", appointments: ["Mr sa", "Mrdb"]});

        expect(newState).toEqual({ ...initialState, appointments:["Mr sa", "Mrdb"], noAppointments: false, error:false})

    })

    it("No appointments found", ()=> {

        const newState = fetchAppointments(undefined, {type:"NO_APPOINTMENTS_FOUND"});

        expect(newState).toEqual({ ...initialState, appointments:[], noAppointments: true, error:false})

    })

    it("Generic error", ()=> {

        const newState = fetchAppointments(undefined, {type:"GENERIC"});

        expect(newState).toEqual({ ...initialState, appointments:[], noAppointments: false, error:true})

    })


})