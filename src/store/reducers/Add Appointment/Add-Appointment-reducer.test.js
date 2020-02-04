import AddAppointment from "./Add-Appointment-reducer"

describe("Add Appointment reducer", () => {

    const initialState = {//set the initial state

        clientName: null,
        appointmentAdded: false,
        error:false
      
      }

    it("Should return default state", () => {

        const newState = AddAppointment(initialState, "Doesn't exist");

        expect(newState).toEqual(initialState)

    })


    it("Set client name", ()=> {

        const newState = AddAppointment(undefined, {type:"SET_CLIENT", clientName: "Dave Daveson"});

        expect(newState).toEqual({ ...initialState, clientName: "Dave Daveson"})

    })

    it("Submission success", () => {

        const newState = AddAppointment(undefined, { type: "SUBMISSION_SUCCESS" });

        expect(newState).toEqual({ ...initialState, clientName: null, appointmentAdded: true, error:false})

    })

    it("Submission failure", () => {

        const newState = AddAppointment(undefined, { type: "SUBMISSION_FAILURE" });

        expect(newState).toEqual({ ...initialState, error:true})

    })

    it("Reset", () => {

        const newState = AddAppointment(undefined, { type: "RESET" });

        expect(newState).toEqual({ ...initialState, clientName:null, appointmentAdded:false, error:false})

    })

})